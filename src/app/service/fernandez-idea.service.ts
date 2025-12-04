import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { serverURL, debug } from '../environment/environment';
import { IPage } from '../model/plist';
import { IFernandezIdea } from '../model/fernandez-idea';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FernandezIdeaService {
  private readonly http = inject(HttpClient);

  getPage(page: number, rpp: number, order: string = '', direction: string = '', publico?: boolean, search?: string, categoria?: string): Observable<IPage<IFernandezIdea>> {
    // Force ordering by id ascending to ensure consistent display order
    order = 'id';
    direction = 'asc';
    // Construimos params dinámicamente; sólo añadimos 'publico' si se pasa
    // Backend expects separate 'sort' (field) and 'direction' (asc|desc) query params
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', rpp.toString())
      .set('sort', order)
      .set('direction', direction);
    if (publico !== undefined) {
      params = params.set('publico', String(publico));
    }
    if (search !== undefined && search !== '') {
      params = params.set('search', search);
    }
    if (categoria !== undefined && categoria !== '' && categoria !== 'ALL') {
      params = params.set('categoria', categoria);
    }

    const pageRequest$ = this.http.get<IPage<IFernandezIdea>>(serverURL + '/idea', { params });
    // Si se pasa 'publico' pedimos el conteo filtrado; si no, pedimos el conteo general
    const countRequest$ = this.count(publico, search, categoria);

    return forkJoin([pageRequest$, countRequest$]).pipe(
      map(([pageData, countPublic]) => {
        // Defensive: ensure content is an array so templates won't break
        pageData.content = pageData.content || [];
        // Filtrado defensivo: eliminar cualquier idea privada que el backend haya devuelto por error cuando se pidió publico=true
        if (publico === true) {
          pageData.content = pageData.content.filter((i: IFernandezIdea) => i.publico);
        }
        // Ajustar totalElements y totalPages usando el conteo (si el backend devolvió conteo correcto esto coincide)
        if (typeof countPublic === 'number') {
          pageData.totalElements = countPublic;
          pageData.totalPages = Math.max(1, Math.ceil(countPublic / rpp));
        }
        return pageData;
      })
    );
  }

  get(id: number): Observable<IFernandezIdea> {
    return this.http.get<IFernandezIdea>(serverURL + '/idea/' + id);
  }

  create(idea: Partial<IFernandezIdea>): Observable<number> {
    return this.http.post<number>(serverURL + '/idea', idea);
  }

  update(idea: Partial<IFernandezIdea>): Observable<number> {
    return this.http.put<number>(serverURL + '/idea', idea);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(serverURL + '/idea/' + id);
  }

  count(publico?: boolean, search?: string, categoria?: string): Observable<number> {
    let url = serverURL + '/idea/count';
    let params: HttpParams | undefined;
    if (publico !== undefined) {
      params = (params || new HttpParams()).set('publico', String(publico));
    }
    if (search !== undefined && search !== '') {
      params = (params || new HttpParams()).set('search', search);
    }
    if (categoria !== undefined && categoria !== '' && categoria !== 'ALL') {
      params = (params || new HttpParams()).set('categoria', categoria);
    }
    return this.http.get<number>(url, params ? { params } : {});
  }

    bulkCreate(amount: number = 20): Observable<number> {
      // El backend debe tener un endpoint tipo /idea/bulk/{amount}
      return this.http.post<number>(serverURL + `/idea/bulk/${amount}`, {});
    }
}

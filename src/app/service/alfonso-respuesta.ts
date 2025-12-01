import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverURL } from '../environment/environment';
import { IPage } from '../model/plist';
import { IAlfonsoRespuesta } from '../model/alfonso-respuesta';

@Injectable({
  providedIn: 'root',
})
export class AlfonsoRespuestaService {

  constructor(private oHttp: HttpClient) { }

  getPage(page: number, rpp: number, order: string = 'id', direction: string = 'asc'): Observable<IPage<IAlfonsoRespuesta>> {
    return this.oHttp.get<IPage<IAlfonsoRespuesta>>(serverURL + `/alfonsorespuesta?page=${page}&size=${rpp}&sort=${order},${direction}`);
  }

  get(id: number): Observable<IAlfonsoRespuesta> {
    return this.oHttp.get<IAlfonsoRespuesta>(serverURL + '/alfonsorespuesta/' + id);
  }

  create(respuesta: Partial<IAlfonsoRespuesta>): Observable<number> {
    return this.oHttp.post<number>(serverURL + '/alfonsorespuesta', respuesta);
  }

  update(respuesta: Partial<IAlfonsoRespuesta>): Observable<number> {
    return this.oHttp.put<number>(serverURL + '/alfonsorespuesta', respuesta);
  }

  delete(id: number): Observable<number> {
    return this.oHttp.delete<number>(serverURL + '/alfonsorespuesta/' + id);
  }

  rellena(cantidad: number): Observable<number> {
    return this.oHttp.get<number>(serverURL + '/alfonsorespuesta/rellena/' + cantidad);
  }

  count(): Observable<number> {
    return this.oHttp.get<number>(serverURL + '/alfonsorespuesta/count');
  }
}

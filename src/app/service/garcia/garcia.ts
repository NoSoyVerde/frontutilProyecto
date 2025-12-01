import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../../environment/environment';
import { IPage } from '../../model/plist';
import { Observable } from 'rxjs';
import { IGarcia } from '../../model/garcia/garcia';

@Injectable({
  providedIn: 'root'
})
export class GarciaService {
  private url = 'http://localhost:8089/garcia';

  constructor(private http: HttpClient) { }

  getPage(page: number, rpp: number, order: string = '', direction: string = ''): Observable<IPage<IGarcia>> {
    if (order === '') {
      order = 'id';
    }
    if (direction === '') {
      direction = 'asc';
    }
    return this.http.get<IPage<IGarcia>>(serverURL + `/garcia?page=${page}&size=${rpp}&sort=${order},${direction}`);
  }

  get(id: number): Observable<IGarcia> {
   return this.http.get<IGarcia>(serverURL + '/garcia/' + id);
  }

  create(garcia: Partial<IGarcia>): Observable<number> {
    return this.http.post<number>(this.url, garcia);
  }

  update(garcia: Partial<IGarcia>): Observable<number> {
   return this.http.put<number>(serverURL + '/garcia', garcia);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(serverURL + '/garcia/' + id);
  }

  rellenaBlog(numPosts: number): Observable<number> {
    return this.http.get<number>(serverURL + '/garcia/rellena/' + numPosts);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.url}/count`);
  }

  createRandom(cantidad: number): Observable<number> {
    return this.http.post<number>(`${this.url}/random/${cantidad}`, null);
  }
}
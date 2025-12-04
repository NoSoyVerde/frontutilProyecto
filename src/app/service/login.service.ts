import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginType } from '../model/login';
import { serverURL } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private oHttp: HttpClient) { }

  create(login: Partial<LoginType>): Observable<number> {
    return this.oHttp.post<number>(`${serverURL}/session/login`, login);
  }
}

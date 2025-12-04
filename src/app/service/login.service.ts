import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginType } from '../model/login';
import { serverURL } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private oHttp: HttpClient) {}

  async sha256(text: string): Promise<string> {
    // Convertimos el string a un array de bytes
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // Calculamos el hash SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convertimos el ArrayBuffer a cadena hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }

  create(login: Partial<LoginType>): Observable<string> {
    return this.oHttp.post<string>(`${serverURL}/session/login`, login);
  }
}

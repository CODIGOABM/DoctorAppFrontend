import { HttpClient } from '@angular/common/http';
import {environment }from 'src/environments/environment'
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { Sesion } from '../interfaces/sesion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl: string = environment.apiUrl+"usuario/"

  constructor(private http: HttpClient) { }

  iniciarSesion(request: Login):Observable<Sesion>
  {
    return this.http.post<Sesion>(`${this.baseUrl}login`,request) // cerrar con tilde invertida para llamar el endpoint
  }
 
}

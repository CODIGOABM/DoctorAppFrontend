import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Especialidad } from 'src/app/interfaces/especialidad';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

   baseUrl: string = environment.apiUrl + 'especialidad/';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  lista(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}`,
    {
      headers: {
        'Autorization':this.cookieService.get('Autorization')
      }
    });
    
  }
  listaActivos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}listadoActivos`);
  }

  crear(request: Especialidad): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
  }

  editar(request: Especialidad): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}`, request
    );
  }

  eliminar(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
  }
}

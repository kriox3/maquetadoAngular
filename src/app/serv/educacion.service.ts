import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educaciones/';

  constructor(private http: HttpClient) { }

  //para cargar todas
  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }

  //para agregar una
  public addEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', educacion);
  }

  //para actualizar una
  public updateEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&establecimiento=${educacion.establecimiento}&titulo=${educacion.titulo}&fecha=${educacion.fecha}&completado=${educacion.completado}`, educacion);
  }

  //para borrar una
  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
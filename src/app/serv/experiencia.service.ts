import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  //para cargar todas
  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + 'traer');
  }

  //para agregar una
  public addExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', experiencia);
  }

  //para actualizar una
  public updateExperiencia(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&establecimiento=${experiencia.establecimiento}&ocupacion=${experiencia.ocupacion}&desde=${experiencia.desde}&hasta=${experiencia.hasta}&actual=${experiencia.actual}`, experiencia);
  }

  //para borrar una
  public deleteExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'http://localhost:8080/habilidades/';

  constructor(private http: HttpClient) { }

  //para cargar todas
  public getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL + 'traer');
  }

  //para agregar una
  public addHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', habilidad);
  }

  //para actualizar una
  public updateHabilidad(id: number, habilidad: Habilidad): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&nombre=${habilidad.nombre}&porcentaje=${habilidad.porcentaje}`, habilidad);
  }

  //para borrar una
  public deleteHabilidad(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
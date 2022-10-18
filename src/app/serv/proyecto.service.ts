import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/proyectos/';

  constructor(private http: HttpClient) { }

  //para cargar todas
  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL + 'traer');
  }

  //para agregar una
  public addProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', proyecto);
  }

  //para actualizar una
  public updateProyecto(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&nombre=${proyecto.nombre}&informacion=${proyecto.informacion}&fecha=${proyecto.fecha}&accesoUrl=${proyecto.accesoUrl}`, proyecto);
  }

  //para borrar una
  public deleteProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificacion } from '../models/certificacion';

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  URL = 'http://localhost:8080/certificaciones/';

  constructor(private http: HttpClient) { }

  //para cargar todas
  public getCertificacion(): Observable<Certificacion[]> {
    return this.http.get<Certificacion[]>(this.URL + 'traer');
  }

  //para agregar una
  public addCertificacion(educacion: Certificacion): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', educacion);
  }

  //para actualizar una
  public updateCertificacion(id: number, educacion: Certificacion): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&establecimiento=${educacion.establecimiento}&titulo=${educacion.titulo}&fecha=${educacion.fecha}&completado=${educacion.completado}`, educacion);
  }

  //para borrar una
  public deleteCertificacion(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
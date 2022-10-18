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
  public addCertificacion(certificacion: Certificacion): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', certificacion);
  }

  //para actualizar una
  public updateCertificacion(id: number, certificacion: Certificacion): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&establecimiento=${certificacion.establecimiento}&titulo=${certificacion.titulo}&fecha=${certificacion.fecha}&completado=${certificacion.completado}`, certificacion);
  }

  //para borrar una
  public deleteCertificacion(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
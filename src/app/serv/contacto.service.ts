import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  
  URL='http://localhost:8080/redeses/';
  
  constructor(private http: HttpClient) {  }

  //para cargar todas
  public getContacto(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.URL+ 'traer');
  }

  //para agregar una
  public addContacto(contacto: Contacto): Observable<any>{
    return this.http.post<any>(this.URL+ 'crear', contacto);
  }

  //para actualizar una
  public updateContacto(id: number, contacto: Contacto): Observable<any>{
    return this.http.put<any>(this.URL+ `editar/${id}?id=${id}&red=${contacto.red.id}&accesoUrl=${contacto.accesoUrl}`, contacto);
  }

  //para borrar una
  public deleteContacto(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+ `borrar/${id}`);
  }





}
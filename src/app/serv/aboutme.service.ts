import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  
  URL='http://localhost:8080/personas/';
  

  constructor(private httpClient : HttpClient) { }

  public save(aboutMe: AboutMe): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', aboutMe);
  }

  public update(aboutMe: AboutMe): Observable<any>{
    return this.httpClient.put<any>(this.URL + 
      `editar/?nombre=${aboutMe.nombre}&apellido=${aboutMe.apellido}&foto=${aboutMe.foto}&localidad=${aboutMe.localidad}&info=${aboutMe.info}`, aboutMe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public ver(): Observable<Object> {  
    return this.httpClient.get(`${this.URL}ver`);  
  }  
}


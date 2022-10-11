import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Portfolio } from '../models/portfolio';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolioURL = 'http://localhost:8080/portfolio/datos';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(this.portfolioURL, cabecera);
  }
}
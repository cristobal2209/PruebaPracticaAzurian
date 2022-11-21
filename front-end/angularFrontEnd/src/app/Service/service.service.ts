import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pais } from '../Modelo/Pais';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/azurian/paises'

  getPaises() {
    return this.http.get<Pais[]>(this.Url);
  }
}

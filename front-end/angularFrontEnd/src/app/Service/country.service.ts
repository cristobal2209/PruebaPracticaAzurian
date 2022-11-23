import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../Model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiServerUrl}/pais/todos`);
  }

  public addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.apiServerUrl}/pais/agregar`, country);
  }

  public updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiServerUrl}/pais/actualizar`, country);
  }

  public deleteCountry(countryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/pais/borrar/${countryId}`);
  }
}

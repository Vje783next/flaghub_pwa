import { Injectable } from '@angular/core';
import { FlagInterface } from '../models/flag.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private api = 'https://restcountries.com/v3.1';

  private fields =
    'name,flags,cca3,capital,region,subregion,population,languages,currencies,maps';

  constructor(private http: HttpClient) { }

  getAllFlags(): Observable<FlagInterface[]> {
    return this.http.get<FlagInterface[]>(`${this.api}/all?fields=${this.fields}`);
  }

  getFlagById(id: string): Observable<FlagInterface> {
    return this.http.get<FlagInterface>(`${this.api}/alpha/${id}?fields=${this.fields}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;



  constructor(private http: HttpClient) { }

  getPokemons(index: any) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}

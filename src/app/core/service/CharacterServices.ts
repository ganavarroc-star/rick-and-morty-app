import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from '../models/Characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServices {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<Characters> {
    return this.http.get<Characters>(`${this.apiUrl}/?page=${page}`);
  }

  searchCharacters(name: string): Observable<Characters> {
    return this.http.get<Characters>(`${this.apiUrl}/?name=${name}`);
  }

  filterByStatus(status: string, page: number = 1): Observable<Characters> {
    return this.http.get<Characters>(`${this.apiUrl}/?status=${status}&page=${page}`);
  }
}

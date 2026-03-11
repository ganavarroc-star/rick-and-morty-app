import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from '../models/Characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServices {

  constructor(private http: HttpClient) { } 

  getCharacters(page: number) :Observable<Characters>{
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }
}
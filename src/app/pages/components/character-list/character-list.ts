import { Component, OnInit } from '@angular/core';
import { CharacterServices } from '../../../core/service/CharacterServices';
import { finalize } from 'rxjs';
import { Characters } from '../../../core/models/Characters';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {

  pagenumber: number = 1;
  isloading: boolean = true;
  characters: Characters | undefined;

  constructor(private characterService: CharacterServices) { }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() : void {
    this.characterService 
   .getCharacters(this.pagenumber).pipe( 
    finalize(() => this.isloading = false)
   )
   .subscribe(
    (response) => {
      this.characters = response;
    this.pagenumber++;
    },
    (error) => {
      console.error('error en la peticion', error);
    } 
  )
  }

}
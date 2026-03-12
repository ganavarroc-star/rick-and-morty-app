import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterServices } from '../../../core/service/CharacterServices';
import { finalize } from 'rxjs';
import { Characters } from '../../../core/models/Characters';

@Component({
  selector: 'app-character-list',
  imports: [FormsModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {

  pagenumber: number = 1;
  isloading: boolean = true;
  characters: Characters | undefined;
  searchName: string = '';
  statusFilter: string = '';

  constructor(private characterService: CharacterServices) { }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() : void {
    this.isloading = true;
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

  onSearch() : void {
    if (this.searchName.trim() === '') {
      this.pagenumber = 1;
      this.getCharacters();
      return;
    }

    this.isloading = true;
    this.characterService
      .searchCharacters(this.searchName)
      .pipe(
        finalize(() => this.isloading = false)
      )
      .subscribe(
        (response) => {
          this.characters = response;
        },
        (error) => {
          console.error('Error al buscar:', error);
          this.characters = { info: { count: 0, pages: 0, next: '', prev: '' }, results: [] };
        }
      );
  }

  filterByStatus(status: string) : void {
    if (status === '') {
      this.pagenumber = 1;
      this.getCharacters();
      return;
    }

    this.isloading = true;
    this.characterService
      .filterByStatus(status)
      .pipe(
        finalize(() => this.isloading = false)
      )
      .subscribe(
        (response) => {
          this.characters = response;
        },
        (error) => {
          console.error('Error al filtrar:', error);
          this.characters = { info: { count: 0, pages: 0, next: '', prev: '' }, results: [] };
        }
      );
  }

  reset() : void {
    this.searchName = '';
    this.statusFilter = '';
    this.pagenumber = 1;
    this.getCharacters();
  }

}
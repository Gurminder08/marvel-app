import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Character[] = [];
  displayCharacters: Character[] = [];
  startNum: number = 0;
  endNum: number = 20;
  characterDisplay:boolean=false;
  query:string;

  constructor(public api: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  async getCharacters() {
    await this.api.getCharacters()
      .subscribe(res => {
        this.characters = res['data'].results;
        this.displayCharacters = this.characters.slice(0, this.endNum);
      }, err => {
        console.log(err);;
      });
  }

  nextPage() {
    if (this.endNum < this.characters.length) {
      this.startNum += 20;
      this.endNum += 20;
      this.displayCharacters = this.characters.slice(this.startNum, this.endNum);
    }
  }

  previousPage() {
    if (this.startNum > 0) {
      this.startNum -= 20;
      this.endNum -= 20;
      this.displayCharacters = this.characters.slice(this.startNum, this.endNum);
    }
  }

  searchCharacter(event){
    this.query = event.target.value.toLowerCase();
  }
}

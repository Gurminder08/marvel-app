import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service.service';
import { Character } from '../../models/character';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Character[] = [];
  displayCharacters: Character[] = [];
  characterDisplay: boolean = false;
  query: string;

  offset: number = 0;
  limit: number = 20;
  totalPages: number;
  pageNumber: number = 1;
  loading: any;

  constructor(public api: CharacterService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.getCharacters();
  }

  async getCharacters() {

    //Load spinner
    await this.loadingController.create({
      message: 'Assembling more heros ...',
      duration: 20000,
      spinner: "dots"
    }).then(loading => loading.present());

    await this.api.getCharacters(this.offset, this.limit)
      .subscribe(res => {
        //Merge previous list and new list of characters using ES6 spread operator 
        this.characters = [...this.characters, ...res['data'].results];
        //show all array elements after the offset
        this.displayCharacters = this.characters.slice(this.offset);
        //set total no of pages
        this.totalPages = (res['data'].total < this.limit)? 1 : Math.trunc(res['data'].total/this.limit)+1;
        //disable spinner
        // this.loading.dismiss();
        this.loadingController.dismiss();
      }, err => {
        console.log(err);;
      });
  }

  nextPage() {
    if ((this.characters.length) / (this.limit * (this.pageNumber + 1)) >= 1) {
      // Get superheroes from the existing characters array
      this.pageNumber++;
      let sliceTo = this.pageNumber * this.limit;
      let sliceFrom = sliceTo - this.limit;
      this.displayCharacters = this.characters.slice(sliceFrom, sliceTo);
    }
    else {
      // Call for new superheroes
      this.offset = this.offset + this.limit;
      this.pageNumber++;
      this.getCharacters();
    }

  }

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      let sliceTo = this.pageNumber * this.limit;
      let sliceFrom = sliceTo - this.limit;
      this.displayCharacters = this.characters.slice(sliceFrom, sliceTo);
    }
  }

  searchCharacter(event) {
    this.query = event.target.value.toLowerCase();
  }

}

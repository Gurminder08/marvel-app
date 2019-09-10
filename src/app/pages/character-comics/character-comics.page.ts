import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterComicsService } from 'src/app/services/character-comics.service';
import { CharacterComics } from 'src/app/models/character-comics';


@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.page.html',
  styleUrls: ['./character-comics.page.scss'],
})
export class CharacterComicsPage implements OnInit {

  id:number;
  characterComics: CharacterComics[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public api: CharacterComicsService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        console.log(this.id);
      }
    });
  }

    ngOnInit() {
      this.getCharacterComics();
  }

  async getCharacterComics() {
    await this.api.getCharacterComics(0, 20, this.id)
      .subscribe(res => {
        this.characterComics = res['data'].results;
        console.log(this.characterComics[0].prices[0].price);
      }, err => {
        console.log(err);;
      });
  }

}

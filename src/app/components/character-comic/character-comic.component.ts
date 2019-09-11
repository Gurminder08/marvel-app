import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CharacterComics } from 'src/app/models/character-comics';

@Component({
  selector: 'app-character-comic',
  templateUrl: './character-comic.component.html',
  styleUrls: ['./character-comic.component.scss'],
})
export class CharacterComicComponent implements OnInit {

  @Input() characterComic: CharacterComics = <CharacterComics>{};
  imageSource: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imageSource = `${this.characterComic.thumbnail.path}.${this.characterComic.thumbnail.extension}`;
  }

  openCharacterComicsDetails(){
    console.log('open character comics');
    let navigationExtras: NavigationExtras = {
      state: {
        characterComic: this.characterComic
      }
    };
    this.router.navigate([`${this.router.url}/${this.characterComic.id}`],navigationExtras); 
  }
}

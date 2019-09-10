import { Component, OnInit, Input } from '@angular/core';
import { CharacterComics } from 'src/app/models/character-comics';

@Component({
  selector: 'app-character-comic',
  templateUrl: './character-comic.component.html',
  styleUrls: ['./character-comic.component.scss'],
})
export class CharacterComicComponent implements OnInit {

  @Input() characterComic: CharacterComics = <CharacterComics>{};
  imageSource: string;

  constructor() { }

  ngOnInit() {
    this.imageSource = `${this.characterComic.thumbnail.path}.${this.characterComic.thumbnail.extension}`;
  }

}

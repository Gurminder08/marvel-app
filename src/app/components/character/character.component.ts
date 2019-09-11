import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  @Input() character: Character = <Character>{};
  @Input() query: string;

  imageSource: any;

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    this.imageSource = `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }

  openCharacterDetails(){
    let navigationExtras: NavigationExtras = {
      state: {
        character: this.character
      }
    };
    this.router.navigate(['/characters',this.character.id], navigationExtras);
  }  
}


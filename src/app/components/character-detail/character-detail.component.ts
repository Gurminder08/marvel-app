import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {

  data: any = {};
  imageSource: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.character;
        this.imageSource = `${this.data.thumbnail.path}.${this.data.thumbnail.extension}`;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
  }

  viewComics(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: this.data.id
      }
    };
    this.router.navigate(['/characters',this.data.id,'comics'],navigationExtras);
  }

}

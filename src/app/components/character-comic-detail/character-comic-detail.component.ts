import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'


@Component({
  selector: 'app-character-comic-detail',
  templateUrl: './character-comic-detail.component.html',
  styleUrls: ['./character-comic-detail.component.scss'],
})
export class CharacterComicDetailComponent implements OnInit {

  data: any = {};
  imageSource: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.characterComic;
        this.imageSource = `${this.data.thumbnail.path}.${this.data.thumbnail.extension}`;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {}

}

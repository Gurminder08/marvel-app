import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterComicsService } from 'src/app/services/character-comics.service';
import { CharacterComics } from 'src/app/models/character-comics';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.page.html',
  styleUrls: ['./character-comics.page.scss'],
})
export class CharacterComicsPage implements OnInit {

  id: number;
  totalComics: number;
  limit: number = 20;
  offset: number = 0;
  characterComics: CharacterComics[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public api: CharacterComicsService,public loadingController: LoadingController) {
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
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    await this.api.getCharacterComics(this.offset, this.limit, this.id)
      .subscribe(res => {
        this.characterComics = [...this.characterComics,...res['data'].results];
        this.totalComics = res['data'].total;
        loading.dismiss();
      }, err => {
        console.log(err);;
      });
  }

    // trigger on scroll event when threshold reaches (100px)
    loadData(event) {
      setTimeout(() => {
        //App logic to determine if all data is loaded and disable the infinite scroll
        if (this.characterComics.length >= this.totalComics) {
          event.target.disabled = true;
        }else{
          this.offset += this.limit;
          this.addMoreComics();
          event.target.complete();
        }       
      }, 1000);
    }
  
    // adding 10 character comics each time scroll event accours
    addMoreComics() {
      this.getCharacterComics();
    }

}

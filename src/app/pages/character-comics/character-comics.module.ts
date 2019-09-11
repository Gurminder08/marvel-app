import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CharacterComicsPage } from './character-comics.page';
import { CharacterComicComponent } from 'src/app/components/character-comic/character-comic.component';
import { CharacterComicDetailComponent } from 'src/app/components/character-comic-detail/character-comic-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComicsPage
  },
  {
    path: ':id',
    component: CharacterComicDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharacterComicsPage, CharacterComicComponent, CharacterComicDetailComponent]
})
export class CharacterComicsPageModule { }

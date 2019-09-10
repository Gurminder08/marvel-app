import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CharacterComicsPage } from './character-comics.page';
import { CharacterComicComponent } from 'src/app/components/character-comic/character-comic.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharacterComicsPage, CharacterComicComponent]
})
export class CharacterComicsPageModule {}

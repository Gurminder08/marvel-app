import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {CharacterComponent} from '../../components/character/character.component';
import {CharacterDetailComponent} from '../../components/character-detail/character-detail.component';
import { CharactersPage } from './characters.page';

const routes:Routes = [
    {
      path: '',
      component: CharactersPage
    },
    {
      path: ':id',
      component: CharacterDetailComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharactersPage,CharacterComponent, CharacterDetailComponent]
})

export class CharactersPageModule {}

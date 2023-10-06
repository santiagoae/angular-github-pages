
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CommonModule } from '@angular/common'; //ngIf ngFor y otros modulos de angular
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }

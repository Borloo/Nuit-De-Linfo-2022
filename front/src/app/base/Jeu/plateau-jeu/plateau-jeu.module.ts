import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateauJeuComponent } from './plateau-jeu.component';
import { CarreModule } from '../carre/carre.module';



@NgModule({
  declarations: [
    PlateauJeuComponent
  ],
  imports: [
    CommonModule,
    CarreModule
  ],
  exports: [
    PlateauJeuComponent
  ]
})
export class PlateauJeuModule { }

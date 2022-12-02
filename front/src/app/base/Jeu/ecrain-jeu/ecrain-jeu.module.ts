import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcrainJeuRoutingModule } from './ecrain-jeu-routing.module';
import { PlateauJeuModule } from '../plateau-jeu/plateau-jeu.module';
import { EcrainJeuComponent } from './ecrain-jeu.component';


@NgModule({
  declarations: [
    EcrainJeuComponent
  ],
  imports: [
    CommonModule,
    EcrainJeuRoutingModule,
    PlateauJeuModule
  ],

})
export class EcrainJeuModule { }

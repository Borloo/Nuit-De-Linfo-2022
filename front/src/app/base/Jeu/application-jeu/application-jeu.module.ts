import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationJeuRoutingModule } from './application-jeu-routing.module';
import {ApplicationJeuComponent} from "./application-jeu.component";
import {BarreAchatModule} from "../barre-achat/barre-achat.module";
import {PlateauJeuModule} from "../plateau-jeu/plateau-jeu.module";
import {BarreActionModule} from "../barre-action/barre-action.module";


@NgModule({
  declarations: [
    ApplicationJeuComponent
  ],
  imports: [
    CommonModule,
    ApplicationJeuRoutingModule,
    BarreAchatModule,
    PlateauJeuModule,
    BarreActionModule
  ]
})
export class ApplicationJeuModule { }

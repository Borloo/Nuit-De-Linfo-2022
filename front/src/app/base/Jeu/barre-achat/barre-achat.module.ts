import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarreAchatRoutingModule } from './barre-achat-routing.module';
import {BarreAchatComponent} from "./barre-achat.component";


@NgModule({
  declarations: [
    BarreAchatComponent
  ],
  imports: [
    CommonModule,
    BarreAchatRoutingModule
  ],
  exports: [
    BarreAchatComponent
  ]
})
export class BarreAchatModule { }

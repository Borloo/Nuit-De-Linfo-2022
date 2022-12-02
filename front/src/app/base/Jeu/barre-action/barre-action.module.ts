import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarreActionRoutingModule } from './barre-action-routing.module';
import {BarreActionComponent} from "./barre-action.component";


@NgModule({
  declarations: [
    BarreActionComponent
  ],
  imports: [
    CommonModule,
    BarreActionRoutingModule
  ],
  exports: [
    BarreActionComponent
  ]
})
export class BarreActionModule { }

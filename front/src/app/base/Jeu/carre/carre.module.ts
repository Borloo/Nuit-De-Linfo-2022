import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreRoutingModule } from './carre-routing.module';
import { CarreComponent } from './carre.component';


@NgModule({
  declarations: [
    CarreComponent
  ],
  imports: [
    CommonModule,
    CarreRoutingModule
  ]
})
export class CarreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreRoutingModule } from './carre-routing.module';
import { CarreComponent } from './carre.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CarreComponent
  ],
  imports: [
    CommonModule,
    CarreRoutingModule,
    HttpClientModule
  ],
  exports: [
    CarreComponent
  ]
})
export class CarreModule { }

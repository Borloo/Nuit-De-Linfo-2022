import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiensUtilesComponent } from './liens-utiles.component';
import { LiensUtilesRoutingModule } from './liens-utiles-routing.module';


@NgModule({
  declarations: [
    LiensUtilesComponent
  ],
  imports: [
    CommonModule,
    LiensUtilesRoutingModule
  ],
  exports: [
    LiensUtilesComponent
  ]
})
export class LiensUtilesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateursRoutingModule } from './donateurs-routing.module';
import { DonateursComponent } from './donateurs.component';


@NgModule({
  declarations: [
    DonateursComponent
  ],
  imports: [
    CommonModule,
    DonateursRoutingModule
  ],
  exports: [
    DonateursComponent
  ]
})
export class DonateursModule { }

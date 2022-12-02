import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionsLegalesComponent } from './mentions-legales.component';
import { MentionsLegalesRoutingModule } from './mentions-legales-routing.module';


@NgModule({
  declarations: [
    MentionsLegalesComponent
  ],
  imports: [
    CommonModule,
    MentionsLegalesRoutingModule
  ],
  exports: [
    MentionsLegalesComponent
  ]
})
export class MentionsLegalesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcrainJeuComponent } from './base/Jeu/ecrain-jeu/ecrain-jeu.component';
import { PlateauJeuComponent } from './base/Jeu/plateau-jeu/plateau-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    EcrainJeuComponent,
    PlateauJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

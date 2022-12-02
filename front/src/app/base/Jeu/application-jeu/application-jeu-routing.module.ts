import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationJeuComponent} from "./application-jeu.component";

const routes: Routes = [{path: '', component: ApplicationJeuComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationJeuRoutingModule { }

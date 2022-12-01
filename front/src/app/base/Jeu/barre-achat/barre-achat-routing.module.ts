import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarreAchatComponent} from "./barre-achat.component";

const routes: Routes = [{path: '', component: BarreAchatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarreAchatRoutingModule { }

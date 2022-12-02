import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarreActionComponent} from "./barre-action.component";

const routes: Routes = [{path: '', component: BarreActionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarreActionRoutingModule { }

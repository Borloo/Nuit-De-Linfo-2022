import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreComponent } from './carre.component';

const routes: Routes = [
  { path: '', component: CarreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreRoutingModule { }

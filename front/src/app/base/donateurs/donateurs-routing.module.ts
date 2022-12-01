import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonateursComponent } from './donateurs.component';

const routes: Routes = [
  { path: '', component: DonateursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonateursRoutingModule { }

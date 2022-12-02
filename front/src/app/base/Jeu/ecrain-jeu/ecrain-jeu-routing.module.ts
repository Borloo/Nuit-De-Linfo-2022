import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcrainJeuComponent } from './ecrain-jeu.component';

const routes: Routes = [
  { path: '', component: EcrainJeuComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcrainJeuRoutingModule { }

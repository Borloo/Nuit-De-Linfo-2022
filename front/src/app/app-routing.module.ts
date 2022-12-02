import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./base/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./base/about-us/about-us.module').then(m => m.AboutUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

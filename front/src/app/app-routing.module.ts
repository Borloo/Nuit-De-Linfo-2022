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
  },
  {
    path: 'donateurs',
    loadChildren: () => import('./base/donateurs/donateurs.module').then(m => m.DonateursModule)
  },
  {
    path: 'liens-utiles',
    loadChildren: () => import('./base/liens-utiles/liens-utiles.module').then(m => m.LiensUtilesModule)
  },
  {
    path: 'mentions-legales',
    loadChildren: () => import('./base/mentions-legales/mentions-legales.module').then(m => m.MentionsLegalesModule)
  },
  {
    path: 'barreAchat',
    loadChildren: () => import('./base/Jeu/barre-achat/barre-achat.module').then(m => m.BarreAchatModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

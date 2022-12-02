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
    path: 'book',
    loadChildren: () => import('./base/book/book.module').then(m => m.BookModule)
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
  },
  {
    path: 'barreAction',
    loadChildren: () => import('./base/Jeu/barre-action/barre-action.module').then(m => m.BarreActionModule)
  },
  {
    path: 'jeu',
    loadChildren: () => import('./base/Jeu/ecrain-jeu/ecrain-jeu.module').then(m => m.EcrainJeuModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

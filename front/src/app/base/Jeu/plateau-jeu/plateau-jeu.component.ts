import { Component, OnInit } from '@angular/core';
import { Entite } from 'src/app/core/models/entite.model';

@Component({
  selector: 'app-plateau-jeu',
  templateUrl: './plateau-jeu.component.html',
  styleUrls: ['./plateau-jeu.component.scss']
})
export class PlateauJeuComponent implements OnInit {

  largeur = 7;
  hauteur = 4;

  buttons : Entite[][] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i<this.hauteur+1; i++) {
      this.buttons[i] = [];
    }
    for (let i = 0; i<this.hauteur; i++) {
      for (let j = 0; j<this.largeur; j++) {
        this.buttons[i][j] = new Entite();
      }
    }
  }

}

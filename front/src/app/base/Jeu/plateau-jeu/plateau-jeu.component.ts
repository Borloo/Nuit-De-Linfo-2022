import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plateau-jeu',
  templateUrl: './plateau-jeu.component.html',
  styleUrls: ['./plateau-jeu.component.scss']
})
export class PlateauJeuComponent implements OnInit {

  largeur = 7;
  hauteur = 4;

  button : string[][] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i<this.hauteur+1; i++) {
      this.button[i] = [];
    }
    for (let i = 0; i<this.hauteur; i++) {
      for (let j = 0; j<this.largeur; j++) {
        this.button[i][j] = "largeur : " + j + ", hauteur : " + i;
      }
    }
  }

}

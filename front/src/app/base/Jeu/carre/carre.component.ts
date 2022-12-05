import { Component, Input, OnInit } from '@angular/core';
import { Entite } from 'src/app/core/models/entite.model';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {
  @Input() entite!: Entite;

  url!: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.entite.libelle) {
      case 'TraitementAntiretroviral':
        this.url = '../../../../assets/images/icon-TA.png';
        break;
      case 'Preservatifs':
        this.url = '../../../../assets/images/icon-capote.png';
        break;
      case 'Depistage':
        this.url = '../../../../assets/images/icon-depistage.png';
        break;
      case 'TraitementPostExposition':
        this.url = '../../../../assets/images/icon-TPE.png';
        break;
      case 'PrEP':
        this.url = '../../../../assets/images/icon-PrEP.pnh';
        break;
      case 'TasP':
        this.url = '../../../../assets/images/icon-TasP.png';
        break;
      case 'Vaccin':
        this.url = '../../../../assets/images/icon-vaccin.png';
        break;
      case 'VPH':
        this.url = '../../../../assets/images/icon-vph.png';
        break;
      case 'HerpesGenita':
        this.url = '../../../../assets/images/icon-herpes.png';
        break;
      case 'Morpions':
        this.url = '../../../../assets/images/icon-morpions.png';
        break;
      case 'Gale':
        this.url = '../../../../assets/images/icon-gale.png';
        break;
      case 'TrichomonaseVaginalis':
        this.url = '../../../../assets/images/icon-vaginalis.png';
        break;
      case 'Syphillis':
        this.url = '../../../../assets/images/icon-syphillis.png';
        break;
      case 'Chlamydiose':
        this.url = '../../../../assets/images/icon-chlamydia.png';
        break;
      case 'HepatiteB':
        this.url = '../../../../assets/images/icon-hepatite-b.png';
        break;
      case 'VIH':
        this.url = '../../../../assets/images/icon-vih.png';
        break;
      default:
        this.url = '';
        break;
    }
  }






}

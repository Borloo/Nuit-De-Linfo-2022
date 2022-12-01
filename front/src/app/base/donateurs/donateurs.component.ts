import { Component, OnInit } from '@angular/core';

import { Donateur } from '../../core/models/donateur.model';
import { DONATEURS } from '../../core/mock/donateurs';

@Component({
  selector: 'app-donateurs',
  templateUrl: './donateurs.component.html',
  styleUrls: ['./donateurs.component.scss']
})
export class DonateursComponent implements OnInit {

  donateurs: Donateur[] = [];

  constructor () { }

  ngOnInit() {
    this.donateurs = DONATEURS;

    this.donateurs.sort((a, b) => 
      b.sommeDonnee - a.sommeDonnee
    );
  }
  
}

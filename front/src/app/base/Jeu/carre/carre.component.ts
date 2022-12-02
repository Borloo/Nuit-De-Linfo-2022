import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {
  @Input() public largeur : number = 60;

  constructor() { }

  ngOnInit(): void {
  }






}

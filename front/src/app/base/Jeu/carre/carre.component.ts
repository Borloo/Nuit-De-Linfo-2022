import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {
  @Input() public largeur : number = 60;

  private libelle;

  constructor(private http: HttpClient) {
    this.libelle = "";
  }

  public spawnIST() {

    let ist = this.http.get<any>("http://88.208.226.189:8080/api/v1/random");
    console.log(ist.subscribe(data => {
      this.libelle = data.libelle
    }));

  }

  ngOnInit(): void {
  }
}

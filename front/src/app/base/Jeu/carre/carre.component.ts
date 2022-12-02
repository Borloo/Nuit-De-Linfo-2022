import { Component, Input, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    });
    let ist = this.http.get<any>("http://88.208.226.189:8080/api/v1/random", {headers});
    console.log(ist.subscribe(data => {
      this.libelle = data.libelle
    }));

  }

  ngOnInit(): void {
  }
}

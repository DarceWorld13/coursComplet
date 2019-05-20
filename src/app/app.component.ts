import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
    <app-c1></app-c1>
    <hr />
    <app-c2></app-c2>
  `
})
export class AppComponent implements OnInit {
  unObjetCollegueFourni;

  constructor(private _dataSrv: DataService) {}

  ngOnInit() {
    this.unObjetCollegueFourni = this._dataSrv.recupererCollegueCourant();
    // qui s'exécute à l'initialisation du composant
  }
}

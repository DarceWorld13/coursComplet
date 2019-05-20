import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styleUrls: ['./rechercher-par-nom.component.css']
})
export class RechercherParNomComponent implements OnInit {
  listeMatricules: string[];

  constructor(private _dataSrv: DataService) {}

  ngOnInit() {}

  findByNom(nomSaisi: string) {
    this.listeMatricules = this._dataSrv.rechercherParNom(nomSaisi); 
  }
}

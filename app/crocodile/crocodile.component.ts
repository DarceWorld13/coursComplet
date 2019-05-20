import { Component, OnInit } from '@angular/core';
import { cols } from '../mock/collegues.mock';

@Component({
  selector: 'app-crocodile',
  templateUrl: './crocodile.component.html',
  styleUrls: ['./crocodile.component.css']
})
export class CrocodileComponent implements OnInit {
  nbPassage = 0;
  afficherImage = false;
  couleurTexte = 'black';
  tailleTexte = '12px';

  tableauCollegues = cols;
 
  nombreMessage = 0;

  tableauNombres = [1, 2, 3, 4];

  urlImage = 'https://i.ytimg.com/vi/UWHbbS7dres/hqdefault.jpg';

  constructor() {}

  ngOnInit() {}

  passageSourisSurBouton() {
    this.nbPassage++;
  }

  changerImage(saisieValue: string) {
    this.urlImage = saisieValue;
  }

  traiterNouvelleTailleImage(tailleImage: number) {
    this.tailleTexte = `${tailleImage / 10}px`;
    if (tailleImage < 500) {
      this.couleurTexte = 'green';
    } else {
      this.couleurTexte = 'red';
    }
  }

  methode(nb: number) {
    if (nb === 0) {
      this.nombreMessage = 1;
    } else {
      this.nombreMessage = 0;
    }
  }

  afficherPink() {
    return false;
  }
}

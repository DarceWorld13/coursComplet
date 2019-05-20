import { Component } from '@angular/core';
import { Crocodile } from '../crocodile';

@Component({
  selector: 'app-c1', // <app-c1></app-c1>
  templateUrl: './c1.component.html'
})
export class C1Component {
  unTexte = 'ceci est le texte de c1';

  cacherCrocodile = false;

  messageCrocodile = '';

  dundee: Crocodile = new Crocodile(66, 400, 200, 'rose');

  gali: Crocodile = new Crocodile(123, 500, 500, 'vert pomme');

  additionner(nb1: number, nb2: number) {
    return nb1 + nb2;
  }

  cacherAfficherCroco(saisie: HTMLInputElement) {
    this.cacherCrocodile = !this.cacherCrocodile;

    if (this.cacherCrocodile) {
      this.messageCrocodile = 'Crocodile caché : ' + saisie.value;
    } else {
      this.messageCrocodile = 'Bonjour Croco ! ' + saisie.value; 
    }

    saisie.value = '';
    saisie.focus();
  }

  traiterLaFaimDunCroco(leTexte: string) {
    alert(leTexte);
  }
}

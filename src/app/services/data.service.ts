import {
  Injectable
} from '@angular/core';
import {
  mcgregor
} from '../mock/collegues.mock';
import {
  matricules
} from '../mock/matricules.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  recupererCollegueCourant() {
    return mcgregor;
  }

  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.
    return matricules;
  }
}

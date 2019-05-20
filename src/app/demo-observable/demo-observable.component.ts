import { Component, OnInit } from '@angular/core';
import { DemoObservableService } from '../services/demo-observable.service';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html'
})
export class DemoObservableComponent implements OnInit {
  listeNombres: number[] = [];
  listePostsAffiches: Post[] = [];
  message = '';

  constructor(private _demoObsSrv: DemoObservableService) {}

  ngOnInit() {
    const numbers$: Observable<number> = this._demoObsSrv.findNumbers();

    // créer un observateur
    numbers$.subscribe(
      (valeurEmise: number) => {
        this.listeNombres.push(valeurEmise);
      },
      erreur => {},
      () => {
        this.message = `c'est terminé !`;
      }
    );

    this._demoObsSrv.findPosts().subscribe(
      tabPosts => {
        this.listePostsAffiches = tabPosts;
      },
      erreur => {}
    );
  }
}

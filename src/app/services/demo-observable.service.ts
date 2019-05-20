import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoObservableService {
  constructor(private _http: HttpClient) {}

  findNumbers(): Observable<number> {
    return Observable.create(observateur => {
      setTimeout(() => observateur.next(100), 2000);
      setTimeout(() => observateur.next(200), 5000);
      setTimeout(() => observateur.complete(), 10000);
    });
  }

  findPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(environment.urlPosts).pipe(
      map(tabPost100 => {
        const tab10 = [];
   
        for (let unPost of tabPost100) {
          if (unPost.id >= 90) {
            tab10.push(unPost);
          }
        }

        return tab10;
      }),
      map(tab =>
        tab.map(p => {
          p.title = p.title.toUpperCase();
          return p;
        })
      )
    );
  }
}

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoSubjectService {
  private subject = new Subject<string>();

  constructor() {}

  publish(data: string) {
    // publier dans le subject
    this.subject.next(data);
  }

  prendreAbonnement(): Observable<string> { 
    return this.subject.asObservable();
  }
}

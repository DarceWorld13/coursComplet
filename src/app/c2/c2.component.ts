import { Component, OnInit } from '@angular/core';
import { DemoSubjectService } from '../services/demo-subject.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  listeValeursRecues: string[] = [];

  constructor(private demoSubSrv: DemoSubjectService) {}

  ngOnInit() {
    this.demoSubSrv.prendreAbonnement().subscribe(valeurEmise => {
      this.listeValeursRecues.push(valeurEmise);
    });
  }
}

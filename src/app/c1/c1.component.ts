import { Component, OnInit } from '@angular/core';
import { DemoSubjectService } from '../services/demo-subject.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  constructor(private demoSubSrv: DemoSubjectService) {}

  ngOnInit() {}

  clickC1() {
    this.demoSubSrv.publish('on a cliqué sur c1');
  }
} 

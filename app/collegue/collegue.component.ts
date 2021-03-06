import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;

  constructor() {}

  ngOnInit() {}
}

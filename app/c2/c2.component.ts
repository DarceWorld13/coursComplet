import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crocodile } from '../crocodile';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  @Input() croco: Crocodile;

  @Input() nom: string;

  @Output() jaiFaim = new EventEmitter<string>(); 

  constructor() {}
 
  ngOnInit() {}

  crier() {
    this.jaiFaim.emit(
      `${this.nom} a faim. Attention, il a ${this.croco.nombreDeDents} dents.`
    );
  }
}

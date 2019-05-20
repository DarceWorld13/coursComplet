import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img-croco',
  templateUrl: './img-croco.component.html',
  styleUrls: ['./img-croco.component.css']
})
export class ImgCrocoComponent implements OnInit {
  @Input() imageUrl: string;
  taille = 200;

  @Output() nouvelleTaille = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  changerTaille() {
    this.taille += 100;
    this.nouvelleTaille.emit(this.taille);
  }
}

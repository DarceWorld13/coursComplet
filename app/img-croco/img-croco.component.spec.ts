import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCrocoComponent } from './img-croco.component';

describe('ImgCrocoComponent', () => {
  let component: ImgCrocoComponent;
  let fixture: ComponentFixture<ImgCrocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCrocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCrocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

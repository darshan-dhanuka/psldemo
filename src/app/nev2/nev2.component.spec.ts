import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nev2Component } from './nev2.component';

describe('Nev2Component', () => {
  let component: Nev2Component;
  let fixture: ComponentFixture<Nev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

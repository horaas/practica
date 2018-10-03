import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea2Component } from './tarea2.component';

describe('Tarea2Component', () => {
  let component: Tarea2Component;
  let fixture: ComponentFixture<Tarea2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarea2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

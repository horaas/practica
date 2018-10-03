import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminatelistComponent } from './eliminatelist.component';

describe('EliminatelistComponent', () => {
  let component: EliminatelistComponent;
  let fixture: ComponentFixture<EliminatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

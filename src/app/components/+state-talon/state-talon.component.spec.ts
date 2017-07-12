import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTalonComponent } from './state-talon.component';

describe('StateTalonComponent', () => {
  let component: StateTalonComponent;
  let fixture: ComponentFixture<StateTalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

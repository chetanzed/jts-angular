import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsblog2Component } from './newsblog2.component';

describe('Newsblog2Component', () => {
  let component: Newsblog2Component;
  let fixture: ComponentFixture<Newsblog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newsblog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsblog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

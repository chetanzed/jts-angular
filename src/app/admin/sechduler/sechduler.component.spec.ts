import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SechdulerComponent } from './sechduler.component';

describe('SechdulerComponent', () => {
  let component: SechdulerComponent;
  let fixture: ComponentFixture<SechdulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SechdulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SechdulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

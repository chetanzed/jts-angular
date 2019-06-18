import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JtsBoardPart1SuccessComponent } from './jts-board-part1-success.component';

describe('JtsBoardPart1SuccessComponent', () => {
  let component: JtsBoardPart1SuccessComponent;
  let fixture: ComponentFixture<JtsBoardPart1SuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JtsBoardPart1SuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JtsBoardPart1SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

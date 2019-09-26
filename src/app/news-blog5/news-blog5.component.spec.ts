import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlog5Component } from './news-blog5.component';

describe('NewsBlog5Component', () => {
  let component: NewsBlog5Component;
  let fixture: ComponentFixture<NewsBlog5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlog5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlog5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

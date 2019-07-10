import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlog3Component } from './news-blog3.component';

describe('NewsBlog3Component', () => {
  let component: NewsBlog3Component;
  let fixture: ComponentFixture<NewsBlog3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlog3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

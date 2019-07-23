import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlog6Component } from './news-blog6.component';

describe('NewsBlog6Component', () => {
  let component: NewsBlog6Component;
  let fixture: ComponentFixture<NewsBlog6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlog6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlog6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

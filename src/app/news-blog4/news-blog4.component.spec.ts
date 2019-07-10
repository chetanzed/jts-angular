import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlog4Component } from './news-blog4.component';

describe('NewsBlog4Component', () => {
  let component: NewsBlog4Component;
  let fixture: ComponentFixture<NewsBlog4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlog4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

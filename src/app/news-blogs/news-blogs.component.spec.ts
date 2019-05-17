import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlogsComponent } from './news-blogs.component';

describe('NewsBlogsComponent', () => {
  let component: NewsBlogsComponent;
  let fixture: ComponentFixture<NewsBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

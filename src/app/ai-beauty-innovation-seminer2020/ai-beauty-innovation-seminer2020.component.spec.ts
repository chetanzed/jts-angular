import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIBeautyInnovationSeminer2020Component } from './ai-beauty-innovation-seminer2020.component';

describe('AIBeautyInnovationSeminer2020Component', () => {
  let component: AIBeautyInnovationSeminer2020Component;
  let fixture: ComponentFixture<AIBeautyInnovationSeminer2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIBeautyInnovationSeminer2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIBeautyInnovationSeminer2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

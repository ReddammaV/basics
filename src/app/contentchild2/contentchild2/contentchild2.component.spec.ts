import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentchild2Component } from './contentchild2.component';

describe('Contentchild2Component', () => {
  let component: Contentchild2Component;
  let fixture: ComponentFixture<Contentchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contentchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contentchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

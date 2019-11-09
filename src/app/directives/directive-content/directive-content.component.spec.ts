import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveContentComponent } from './directive-content.component';

describe('DirectiveContentComponent', () => {
  let component: DirectiveContentComponent;
  let fixture: ComponentFixture<DirectiveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

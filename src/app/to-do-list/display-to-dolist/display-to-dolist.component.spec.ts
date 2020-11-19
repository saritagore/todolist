import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayToDolistComponent } from './display-to-dolist.component';

describe('DisplayToDolistComponent', () => {
  let component: DisplayToDolistComponent;
  let fixture: ComponentFixture<DisplayToDolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayToDolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayToDolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

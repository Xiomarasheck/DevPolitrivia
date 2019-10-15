import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDebatesComponent } from './scroll-debates.component';

describe('ScrollDebatesComponent', () => {
  let component: ScrollDebatesComponent;
  let fixture: ComponentFixture<ScrollDebatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDebatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

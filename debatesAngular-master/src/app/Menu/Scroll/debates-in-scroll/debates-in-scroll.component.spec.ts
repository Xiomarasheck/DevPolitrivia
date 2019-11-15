import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatesInScrollComponent } from './debates-in-scroll.component';

describe('DebatesInScrollComponent', () => {
  let component: DebatesInScrollComponent;
  let fixture: ComponentFixture<DebatesInScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebatesInScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatesInScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

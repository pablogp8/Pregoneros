import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGComponent } from './layout-g.component';

describe('LayoutGComponent', () => {
  let component: LayoutGComponent;
  let fixture: ComponentFixture<LayoutGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

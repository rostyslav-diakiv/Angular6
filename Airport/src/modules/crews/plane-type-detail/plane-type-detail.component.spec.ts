import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypeDetailComponent } from './plane-type-detail.component';

describe('PlaneTypeDetailComponent', () => {
  let component: PlaneTypeDetailComponent;
  let fixture: ComponentFixture<PlaneTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaneTypeDialogComponent } from './add-plane-type-dialog.component';

describe('AddPlaneTypeDialogComponent', () => {
  let component: AddPlaneTypeDialogComponent;
  let fixture: ComponentFixture<AddPlaneTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaneTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaneTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

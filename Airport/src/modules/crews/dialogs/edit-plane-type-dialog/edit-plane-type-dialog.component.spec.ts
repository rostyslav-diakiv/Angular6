import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaneTypeDialogComponent } from './edit-plane-type-dialog.component';

describe('EditPlaneTypeDialogComponent', () => {
  let component: EditPlaneTypeDialogComponent;
  let fixture: ComponentFixture<EditPlaneTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaneTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaneTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

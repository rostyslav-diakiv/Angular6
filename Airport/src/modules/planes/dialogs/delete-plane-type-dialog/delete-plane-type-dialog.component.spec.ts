import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaneTypeDialogComponent } from './delete-plane-type-dialog.component';

describe('DeletePlaneTypeDialogComponent', () => {
  let component: DeletePlaneTypeDialogComponent;
  let fixture: ComponentFixture<DeletePlaneTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePlaneTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlaneTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

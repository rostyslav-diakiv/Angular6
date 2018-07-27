import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCrewDialogComponent } from './edit-crew-dialog.component';

describe('EditCrewDialogComponent', () => {
  let component: EditCrewDialogComponent;
  let fixture: ComponentFixture<EditCrewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCrewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCrewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

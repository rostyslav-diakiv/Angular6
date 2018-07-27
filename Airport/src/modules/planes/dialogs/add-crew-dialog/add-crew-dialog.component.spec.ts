import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrewDialogComponent } from './add-crew-dialog.component';

describe('AddCrewDialogComponent', () => {
  let component: AddCrewDialogComponent;
  let fixture: ComponentFixture<AddCrewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCrewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCrewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

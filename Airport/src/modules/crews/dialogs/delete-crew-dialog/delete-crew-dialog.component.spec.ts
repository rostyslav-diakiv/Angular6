import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCrewDialogComponent } from './delete-crew-dialog.component';

describe('DeleteCrewDialogComponent', () => {
  let component: DeleteCrewDialogComponent;
  let fixture: ComponentFixture<DeleteCrewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCrewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCrewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

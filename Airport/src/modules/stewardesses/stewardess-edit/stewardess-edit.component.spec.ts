import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessEditComponent } from './stewardess-edit.component';

describe('FlightEditComponent', () => {
  let component: StewardessEditComponent;
  let fixture: ComponentFixture<StewardessEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessCreateComponent } from './stewardess-create.component';

describe('FlightCreateComponent', () => {
  let component: StewardessCreateComponent;
  let fixture: ComponentFixture<StewardessCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

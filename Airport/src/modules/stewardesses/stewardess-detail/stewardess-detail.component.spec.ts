import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessDetailComponent } from './stewardess-detail.component';

describe('StewardessDetailComponent', () => {
  let component: StewardessDetailComponent;
  let fixture: ComponentFixture<StewardessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

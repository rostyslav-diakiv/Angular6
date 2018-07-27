import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewsListComponent } from './crews-list.component';

describe('CrewsListComponent', () => {
  let component: CrewsListComponent;
  let fixture: ComponentFixture<CrewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

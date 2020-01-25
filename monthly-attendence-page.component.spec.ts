import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAttendencePageComponent } from './monthly-attendence-page.component';

describe('MonthlyAttendencePageComponent', () => {
  let component: MonthlyAttendencePageComponent;
  let fixture: ComponentFixture<MonthlyAttendencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyAttendencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyAttendencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

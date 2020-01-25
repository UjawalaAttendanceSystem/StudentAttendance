import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysAttendencePageComponent } from './todays-attendence-page.component';

describe('TodaysAttendencePageComponent', () => {
  let component: TodaysAttendencePageComponent;
  let fixture: ComponentFixture<TodaysAttendencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysAttendencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysAttendencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

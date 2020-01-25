import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAttendencePageComponent } from './analysis-attendence-page.component';

describe('AnalysisAttendencePageComponent', () => {
  let component: AnalysisAttendencePageComponent;
  let fixture: ComponentFixture<AnalysisAttendencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisAttendencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisAttendencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

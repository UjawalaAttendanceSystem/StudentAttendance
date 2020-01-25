import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAttendencePageComponent } from './graph-attendence-page.component';

describe('GraphAttendencePageComponent', () => {
  let component: GraphAttendencePageComponent;
  let fixture: ComponentFixture<GraphAttendencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphAttendencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAttendencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

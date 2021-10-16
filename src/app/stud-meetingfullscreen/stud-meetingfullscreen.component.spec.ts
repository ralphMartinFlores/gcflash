import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudMeetingfullscreenComponent } from './stud-meetingfullscreen.component';

describe('StudMeetingfullscreenComponent', () => {
  let component: StudMeetingfullscreenComponent;
  let fixture: ComponentFixture<StudMeetingfullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudMeetingfullscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudMeetingfullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingfullscreenComponent } from './admin-meetingfullscreen.component';

describe('AdminMeetingfullscreenComponent', () => {
  let component: AdminMeetingfullscreenComponent;
  let fixture: ComponentFixture<AdminMeetingfullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeetingfullscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMeetingfullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfMeetingfullscreenComponent } from './prof-meetingfullscreen.component';

describe('ProfMeetingfullscreenComponent', () => {
  let component: ProfMeetingfullscreenComponent;
  let fixture: ComponentFixture<ProfMeetingfullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfMeetingfullscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfMeetingfullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingapprovalComponent } from './admin-meetingapproval.component';

describe('AdminMeetingapprovalComponent', () => {
  let component: AdminMeetingapprovalComponent;
  let fixture: ComponentFixture<AdminMeetingapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeetingapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMeetingapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfMeetingtypeComponent } from './prof-meetingtype.component';

describe('ProfMeetingtypeComponent', () => {
  let component: ProfMeetingtypeComponent;
  let fixture: ComponentFixture<ProfMeetingtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfMeetingtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfMeetingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

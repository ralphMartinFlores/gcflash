import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSchedmeetingComponent } from './admin-schedmeeting.component';

describe('AdminSchedmeetingComponent', () => {
  let component: AdminSchedmeetingComponent;
  let fixture: ComponentFixture<AdminSchedmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSchedmeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSchedmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

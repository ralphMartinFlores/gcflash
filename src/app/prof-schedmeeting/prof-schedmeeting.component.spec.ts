import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSchedmeetingComponent } from './prof-schedmeeting.component';

describe('ProfSchedmeetingComponent', () => {
  let component: ProfSchedmeetingComponent;
  let fixture: ComponentFixture<ProfSchedmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSchedmeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSchedmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

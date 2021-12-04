import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedmeetComponent } from './schedmeet.component';

describe('SchedmeetComponent', () => {
  let component: SchedmeetComponent;
  let fixture: ComponentFixture<SchedmeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedmeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

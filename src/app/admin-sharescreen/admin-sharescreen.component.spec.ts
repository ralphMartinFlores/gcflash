import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSharescreenComponent } from './admin-sharescreen.component';

describe('AdminSharescreenComponent', () => {
  let component: AdminSharescreenComponent;
  let fixture: ComponentFixture<AdminSharescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSharescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSharescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

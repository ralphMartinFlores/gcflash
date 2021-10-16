import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChoosemeetingtypeComponent } from './admin-choosemeetingtype.component';

describe('AdminChoosemeetingtypeComponent', () => {
  let component: AdminChoosemeetingtypeComponent;
  let fixture: ComponentFixture<AdminChoosemeetingtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChoosemeetingtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChoosemeetingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

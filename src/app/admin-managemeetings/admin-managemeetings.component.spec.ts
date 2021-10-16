import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagemeetingsComponent } from './admin-managemeetings.component';

describe('AdminManagemeetingsComponent', () => {
  let component: AdminManagemeetingsComponent;
  let fixture: ComponentFixture<AdminManagemeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManagemeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagemeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

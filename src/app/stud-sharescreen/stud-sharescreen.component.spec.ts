import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudSharescreenComponent } from './stud-sharescreen.component';

describe('StudSharescreenComponent', () => {
  let component: StudSharescreenComponent;
  let fixture: ComponentFixture<StudSharescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudSharescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudSharescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

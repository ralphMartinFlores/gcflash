import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRechistoryComponent } from './stud-rechistory.component';

describe('StudRechistoryComponent', () => {
  let component: StudRechistoryComponent;
  let fixture: ComponentFixture<StudRechistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudRechistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudRechistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

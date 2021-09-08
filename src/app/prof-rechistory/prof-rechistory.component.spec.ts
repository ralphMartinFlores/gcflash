import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfRechistoryComponent } from './prof-rechistory.component';

describe('ProfRechistoryComponent', () => {
  let component: ProfRechistoryComponent;
  let fixture: ComponentFixture<ProfRechistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfRechistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfRechistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

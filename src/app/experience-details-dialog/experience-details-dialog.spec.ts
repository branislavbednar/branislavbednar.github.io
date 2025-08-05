import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsDialog } from './experience-details-dialog';

describe('ExperienceDetailsDialog', () => {
  let component: ExperienceDetailsDialog;
  let fixture: ComponentFixture<ExperienceDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailsDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

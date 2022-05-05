import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerProfilePageComponent } from './jobseeker-profile-page.component';

describe('JobseekerProfilePageComponent', () => {
  let component: JobseekerProfilePageComponent;
  let fixture: ComponentFixture<JobseekerProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

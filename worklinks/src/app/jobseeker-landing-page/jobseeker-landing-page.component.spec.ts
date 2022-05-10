import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerLandingPageComponent } from './jobseeker-landing-page.component';

describe('JobseekerLandingPageComponent', () => {
  let component: JobseekerLandingPageComponent;
  let fixture: ComponentFixture<JobseekerLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

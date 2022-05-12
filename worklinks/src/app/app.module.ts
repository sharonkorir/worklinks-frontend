import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { FooterComponent } from './footer/footer.component';
import { RecruiterNavbarComponent } from './recruiter-navbar/recruiter-navbar.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { PostJobFormComponent } from './post-job-form/post-job-form.component';
import { JobseekerProfilePageComponent } from './jobseeker-profile-page/jobseeker-profile-page.component';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SlidesComponent } from './slides/slides.component';
import { RegisterJobseekerComponent } from './register-jobseeker/register-jobseeker.component';
import { LoginJobseekerComponent } from './login-jobseeker/login-jobseeker.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerNavbarComponent } from './employer-navbar/employer-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EmployerLandingComponent } from './employer-landing/employer-landing.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { JobapplicationpageComponent } from './jobapplicationpage/jobapplicationpage.component';
import { HomeComponent } from './home/home.component';
import { JobseekerLandingPageComponent } from './jobseeker-landing-page/jobseeker-landing-page.component';
import { RecruiterLandingPageComponent } from './recruiter-landing-page/recruiter-landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,
    RecruiterProfileComponent,
    FooterComponent,
    RecruiterNavbarComponent,
    RecruiterDashboardComponent,
    PostJobFormComponent,
    JobseekerProfilePageComponent,
    NavigationBarComponent,
    LandingPageComponent,
    TestimonialsComponent,
    FooterComponent,
    SlidesComponent,
    RegisterJobseekerComponent,
    LoginJobseekerComponent,
    ApplicantsComponent,
    EmployerSignupComponent,
    EmployerLoginComponent,
    EmployerNavbarComponent,
    SearchResultsComponent,
    SearchFilterPipe,
    JobapplicationpageComponent,
    EmployerLandingComponent,
    SearchFilterPipe,
    JobapplicationpageComponent,
    HomeComponent,
    JobseekerLandingPageComponent,
    RecruiterLandingPageComponent,
    

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

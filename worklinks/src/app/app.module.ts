import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    JobseekerProfilePageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

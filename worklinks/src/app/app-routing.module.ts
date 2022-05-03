import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { PostJobFormComponent } from './post-job-form/post-job-form.component';
import { JobseekerProfilePageComponent } from './jobseeker-profile-page/jobseeker-profile-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterJobseekerComponent } from './register-jobseeker/register-jobseeker.component';
import { LoginJobseekerComponent } from './login-jobseeker/login-jobseeker.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {
    path:'jobseeker-profile',component:ProfileComponent
    
  },
  {
    path:'recruiter-profile',component:RecruiterProfileComponent,
  },
  {
path:'recruiter-dashboard',component:RecruiterDashboardComponent
  },
  {
    path:'post-job',component:PostJobFormComponent
  },
  {
    path:'seekers-profile',component:JobseekerProfilePageComponent
  },





  {path: 'jobseeker/register', component: RegisterJobseekerComponent},
  {path: 'jobseeker/login', component: LoginJobseekerComponent},
  {path: 'applicants/applicants', component: ApplicantsComponent},




  { path: 'register', component: EmployerSignupComponent},
  { path: 'login', component: EmployerLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }

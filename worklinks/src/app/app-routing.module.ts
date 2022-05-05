import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { PostJobFormComponent } from './post-job-form/post-job-form.component';
import { JobseekerProfilePageComponent } from './jobseeker-profile-page/jobseeker-profile-page.component';
const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }

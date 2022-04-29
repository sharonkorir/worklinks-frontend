import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
const routes: Routes = [
  {
    path:'',component:ProfileComponent
  },
  {
    path:'recruiter-profile',component:RecruiterProfileComponent,
  },
  {
path:'recruiter-dashboard',component:RecruiterDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }

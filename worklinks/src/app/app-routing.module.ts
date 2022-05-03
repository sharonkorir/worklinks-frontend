import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterJobseekerComponent } from './register-jobseeker/register-jobseeker.component';
import { LoginJobseekerComponent } from './login-jobseeker/login-jobseeker.component';
import { ApplicantsComponent } from './applicants/applicants.component';


const routes: Routes = [
  {path: 'jobseeker/register', component: RegisterJobseekerComponent},
  {path: 'jobseeker/login', component: LoginJobseekerComponent},
  {path: 'applicants/applicants', component: ApplicantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

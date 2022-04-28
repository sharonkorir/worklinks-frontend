import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';

const routes: Routes = [
  { path: 'register', component: EmployerSignupComponent},
  { path: 'login', component: EmployerLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

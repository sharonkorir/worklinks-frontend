import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: 'employer/register', component: EmployerSignupComponent},
  { path: 'employer/login', component: EmployerLoginComponent},
  { path: 'search', component: SearchResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

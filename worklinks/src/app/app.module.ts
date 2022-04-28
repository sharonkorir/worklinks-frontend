import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerLoginComponent } from './employer-login/employer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployerSignupComponent,
    EmployerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

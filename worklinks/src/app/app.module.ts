import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerNavbarComponent } from './employer-navbar/employer-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployerSignupComponent,
    EmployerLoginComponent,
    EmployerNavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingPageComponent,
    TestimonialsComponent,
    FooterComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

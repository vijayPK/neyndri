import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventCarouselComponent } from './event-carousel/event-carousel.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LandingPageComponent,
    EventCarouselComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

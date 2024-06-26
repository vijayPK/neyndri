import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventCarouselComponent } from './event-carousel/event-carousel.component';
import { CoursesComponent } from './courses/courses.component';
import { JobsComponent } from './jobs/jobs.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LandingPageComponent,
    EventCarouselComponent,
    CoursesComponent,
    JobsComponent,
    AchievementsComponent,
    ContactUsComponent,
    RegisterComponent,
    KnowMoreComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

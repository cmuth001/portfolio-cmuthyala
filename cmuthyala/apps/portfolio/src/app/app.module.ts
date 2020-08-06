import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ThankYouNoteComponent } from './thank-you-note/thank-you-note.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, ExperienceComponent, EducationComponent, AboutComponent, CertificationsComponent, TestimoniesComponent, FooterComponent, HeaderComponent, ThankYouNoteComponent, ContactFormComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent, ExperienceComponent, EducationComponent, AboutComponent, CertificationsComponent, TestimoniesComponent, FooterComponent, HeaderComponent, ThankYouNoteComponent, ContactFormComponent, ProjectsComponent],
})
export class AppModule {}

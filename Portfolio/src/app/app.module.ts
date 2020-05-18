import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FreeComponent } from './components/free/free.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { EmailService } from './services/email.service';
import { FormsModule } from '@angular/forms';
import { SubjectService } from './services/subject.service';
import { ValidationService } from './services/validation.service';
import { AnimationService } from './services/animation.service';
import { ChartService } from './services/chart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    SkillComponent,
    ProjectsComponent,
    FreeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    ChartsModule,
    CardsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
  ],
  providers: [
    EmailService,
    ChartService,
    ValidationService,
    SubjectService,
    AnimationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

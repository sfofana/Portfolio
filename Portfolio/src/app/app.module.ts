import { BrowserModule } from '@angular/platform-browser';
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
import { UnsubscribeService } from './services/unsubscribe.service';

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
    UnsubscribeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

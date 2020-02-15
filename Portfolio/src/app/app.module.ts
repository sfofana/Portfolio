import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home/home.component';
import { WorkComponent } from './work-experience/work/work.component';
import { SkillComponent } from './skill-matrix/skill/skill.component';
import { ProjectsComponent } from './project/projects/projects.component';
import { FreeComponent } from './freelance/free/free.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    SkillComponent,
    ProjectsComponent,
    FreeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    ChartsModule,
    CardsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

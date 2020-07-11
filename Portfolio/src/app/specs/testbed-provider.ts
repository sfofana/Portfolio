import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AnimationService } from 'src/app/services/animation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { EmailService } from 'src/app/services/email.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from 'src/app/services/http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, CardsModule, ModalModule, ChartsModule } from 'projects/angular-bootstrap-md/src/public_api';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { Observable, of, throwError } from 'rxjs';
import { Email } from '../models/email';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartService } from '../services/chart.service';
import { WorkComponent } from '../components/work/work.component';
import { SkillComponent } from '../components/skill/skill.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { FreeComponent } from '../components/free/free.component';
import { LoggingService } from '../services/logging.service';
import { Type } from '@angular/core';

export class TestBedProvider{

  public fixtureBuilder<T>(component: Type<T>): ComponentFixture<T> {
    TestBed.configureTestingModule({
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
      ],
      providers: [
        {provide: EmailService, useClass: EmailServiceStub},
        LoggingService,
        ChartService,
        ValidationService,
        SubjectService,
        AnimationService,
        {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
      ]
      }).compileComponents();
      const fixture = TestBed.createComponent(component);
      return fixture;
  }

  public errorFixtureBuilder<T>(component: Type<T>): ComponentFixture<T> {
    TestBed.configureTestingModule({
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
      ],
      providers: [
        {provide: EmailService, useClass: EmailServiceErrorStub},
        LoggingService,
        ChartService,
        ValidationService,
        SubjectService,
        AnimationService,
        {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
      ]
      }).compileComponents();
      const fixture = TestBed.createComponent(component);
      return fixture;
  }

  public serviceTestBed<T>(service: Type<T>): T {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EmailService,
        LoggingService,
        ChartService,
        ValidationService,
        SubjectService,
        AnimationService,
        {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
      ]
    });
    const bed: T = TestBed.get(service);
    return bed;
  }

}

class EmailServiceStub {

  public sendEmail(message: FormData): Observable<Email>{
    return of({
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    });
  }
}

class EmailServiceErrorStub {
  
 public sendEmail(message: FormData): Observable<Email>{
    return throwError("Method not implemented.");
  }

}

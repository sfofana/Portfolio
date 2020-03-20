import { Component, OnInit, OnDestroy } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';
import { takeUntil } from 'rxjs/operators';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => zoomIn', animate(500, keyframes(keyframe.zoomIn))),
      transition('* => pulse', animate(500, keyframes(keyframe.pulse)))
    ])
  ]
})
export class ContactComponent implements OnInit, OnDestroy {

  private animationState: string;
  private animateZoom: string;
  private name: string;
  private email: string;
  private phone: string;
  private subject: string;
  private message: string;
  private success: string;
  private invalid: string;
  private mail = new Email();
  private validMail = new Email();

    constructor(
        private mailer: EmailService,
        private memory: SubjectService,
        private validate: ValidationService
    ) { }

  ngOnInit() {
    this.animateZoom='zoomIn';
  }

  setMail(){
    this.mail.name = this.name;
    this.mail.email = this.email;
    this.mail.phone = this.phone;
    this.mail.subject = this.subject;
    this.mail.message = this.message;
    this.validMail = this.validate.validRequest(this.mail);
  }

  submit(){
    this.setMail();
    this.reset();
    if(this.validMail){
      this.mailer.sendEmail(this.validMail)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(()=>this.success="Message Sent");
    } 
  }

  reset(){
    this.name="";
    this.email="";
    this.phone="";
    this.subject="";
    this.message="";
    this.success="";
    this.invalid="";
  }

  startAnimation(state: string){
    if(!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimation(){
    this.animationState = "";
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}

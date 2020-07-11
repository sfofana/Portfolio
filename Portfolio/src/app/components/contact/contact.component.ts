import { Component, OnInit, OnDestroy } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';
import { takeUntil } from 'rxjs/operators';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => slideUp', animate(500, keyframes(keyframe.slideInUp))),
      transition('* => pulse', animate(500, keyframes(keyframe.pulse)))
    ])
  ]
})
export class ContactComponent implements OnInit, OnDestroy {

  private button: string;
  private slideUp: string;
  private name: string;
  private email: string;
  private phone: string;
  private subject: string;
  private message: string;
  private touchName: string;
  private touchEmail: string;
  private touchPhone: string;
  private touchSubject: string;
  private touchMessage: string;
  private formData: FormData;
  private override: Blob;
  private success: string;
  private invalid: string;
  private mail = new Email();
  private validMail: Email;
  private isSpinning: boolean;

    constructor(
        private mailer: EmailService,
        private memory: SubjectService,
        private validate: ValidationService,
        private animation: AnimationService
    ) { }

  ngOnInit() {
    this.slideUp='slideUp';
    this.isSpinning = false;
    this.formData = new FormData();
    this.override = new Blob();
  }

  setMail(){
    this.mail.name = this.name;
    this.mail.email = this.email;
    this.mail.phone = this.phone;
    this.mail.subject = this.subject;
    this.mail.message = this.message;
    this.touchName = this.validate.validInput(this.name, 'name');
    this.touchEmail = this.validate.validInput(this.email, 'email');
    this.touchSubject = this.validate.validInput(this.subject, 'subject');
    this.touchMessage = this.validate.validInput(this.message, 'message');
    this.validMail = this.validate.validRequest(this.mail);
  }

  setBlob(mail: Email){
    this.override = new Blob(
      [
        JSON.stringify(mail)
      ],
      {
        type: 'application/json'
    });
    this.formData.append('override', this.override);
  }

  submit(){
    this.setMail();
    this.reset();  
    if(this.validMail){
      this.isSpinning = true;
      this.setBlob(this.validMail);
      this.mailer.sendEmail(this.formData)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(()=>{
        this.success="Message Sent";
        this.isSpinning = false;
      });     
    } 
    this.override = new Blob();
    this.formData = new FormData();
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

  btnAnimate(state: string){
    this.button = this.animation.btnAnimate(state);
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}

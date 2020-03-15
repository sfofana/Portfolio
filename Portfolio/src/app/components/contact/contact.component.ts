import { Component, OnInit, OnDestroy } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';
import { UnsubscribeService } from 'src/app/services/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  private name: string;
  private email: string;
  private phone: string;
  private subject: string;
  private message: string;
  private success: string;
  private invalid: string;
  private mail = new Email();

  constructor(private mailer: EmailService, private memory: UnsubscribeService) { }

  ngOnInit() {
  }

  setMail(){
    this.mail.name = this.name;
    this.mail.email = this.email;
    this.mail.phone = this.phone;
    this.mail.subject = this.subject;
    this.mail.message = this.message;
  }

  submit(){
    this.setMail();
    this.mailer.sendEmail(this.mail).pipe(takeUntil(this.memory.unsubscribe)).subscribe();
    this.reset();
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

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}

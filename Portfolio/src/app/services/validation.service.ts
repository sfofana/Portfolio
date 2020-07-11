import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private service: string = "ValidationService";

  constructor(private log: LoggingService) { }
  /**
   * 
   * @param message Email object to be validated
   * @returns Validated email object 
   */
  public validRequest(message: Email): Email{
    let validMessage: Email = null;

    if(!(message.name || message.email || message.phone || message.subject || message.message)){
      validMessage = null;
      this.log.debug(`[${this.service}] === user input invalid email details`);
    }
    if(message.name && message.email && message.subject && message.message){
      validMessage = message;
      this.log.debug(`[${this.service}] === user input valid email details`);
    }
    return validMessage;
  }

  /**
   * 
   * @param text The input text
   * @param field The name of input field
   * @returns Message when fields are blank
   */
  public validInput(text: string, field: string): string {
    let message: string = '';
    if(!text) {
      switch(field) {
        case 'name':
          message = 'Please enter a name';
          this.log.debug(`[${this.service}] === user input missing name`);
          break;
        case 'email':
          message = 'Please enter an email';
          this.log.debug(`[${this.service}] === user input missing email`);
          break;
        case 'subject':
          message = 'Please enter a subject';
          this.log.debug(`[${this.service}] === user input missing subject`);
          break;
        case 'message':
          message = 'Please enter a message';
          this.log.debug(`[${this.service}] === user input missing message`);
          break;
      }
    }
    return message;
  }
}

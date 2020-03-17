import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validRequest(message: Email): Email{
    let validMessage = new Email();
    validMessage = null;

    if(!(message.name || message.email || message.phone || message.subject || message.message)){
      validMessage = null;
    }
    if(message.name && message.email && message.subject && message.message){
      validMessage = message;
    }
    return validMessage;
  }
}

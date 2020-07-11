import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  /**
   * Sets log to the console
   * @param message The logged message
   */
  public debug(message: string): void {
    const rawDate: Date = new Date(); 
    const date: string = formatDate(rawDate, 'medium', 'en-us');
    console.log(`${date} : ${message}`);
  }

}

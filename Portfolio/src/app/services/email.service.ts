import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = environment.emailUrl;

  constructor(private http: HttpClient) { }

  public sendEmail(message: Email): Observable<Email>{
    return this.http.post<Email>(this.url, message);
  }
}

import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Email } from '../models/email';
import { environment } from 'src/environments/environment';
import { TestBedProvider } from '../specs/testbed-provider';

describe('EmailService', () => {
  let mockService: EmailService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    mockService = provider.serviceTestBed(EmailService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('Should return http post method from email service', () => {
    const mockEmail: Email = {
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    };   
    const message: FormData = new FormData; 
    mockService.sendEmail(message).subscribe(data => {
      expect(data).toBe(mockEmail);
    });

    const request = mockHttp.expectOne(`${environment.emailUrl}`); 
    expect(request.request.method).toBe('POST');
    request.flush(mockEmail);
  });

});

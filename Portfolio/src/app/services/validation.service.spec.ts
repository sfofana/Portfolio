import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';
import { TestBedProvider } from '../specs/testbed-provider';
import { Email } from '../models/email';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    service = provider.serviceTestBed(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify email details', () => {
    const message: Email ={
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    };

    expect(service.validRequest(message)).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AnimationService } from './animation.service';
import { TestBedProvider } from '../specs/testbed-provider';

describe('AnimationService', () => {
  let service: AnimationService;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    service = provider.serviceTestBed(AnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

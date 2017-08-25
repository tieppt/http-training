import { TestBed, inject } from '@angular/core/testing';

import { CoreRequestOptionsService } from './core-request-options.service';

describe('CoreRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreRequestOptionsService]
    });
  });

  it('should be created', inject([CoreRequestOptionsService], (service: CoreRequestOptionsService) => {
    expect(service).toBeTruthy();
  }));
});

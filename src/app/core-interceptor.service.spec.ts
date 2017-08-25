import { TestBed, inject } from '@angular/core/testing';

import { CoreInterceptorService } from './core-interceptor.service';

describe('CoreInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreInterceptorService]
    });
  });

  it('should be created', inject([CoreInterceptorService], (service: CoreInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});

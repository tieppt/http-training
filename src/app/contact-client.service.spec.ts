import { TestBed, inject } from '@angular/core/testing';

import { ContactClientService } from './contact-client.service';

describe('ContactClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactClientService]
    });
  });

  it('should be created', inject([ContactClientService], (service: ContactClientService) => {
    expect(service).toBeTruthy();
  }));
});

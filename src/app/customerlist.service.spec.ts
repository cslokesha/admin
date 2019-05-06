import { TestBed, inject } from '@angular/core/testing';

import { CustomerlistService } from './customerlist.service';

describe('CustomerlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerlistService]
    });
  });

  it('should be created', inject([CustomerlistService], (service: CustomerlistService) => {
    expect(service).toBeTruthy();
  }));
});

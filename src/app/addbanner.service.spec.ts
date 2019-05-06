import { TestBed, inject } from '@angular/core/testing';

import { AddbannerService } from './addbanner.service';

describe('AddbannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddbannerService]
    });
  });

  it('should be created', inject([AddbannerService], (service: AddbannerService) => {
    expect(service).toBeTruthy();
  }));
});

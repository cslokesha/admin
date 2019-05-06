import { TestBed, inject } from '@angular/core/testing';

import { ViewbannerService } from './viewbanner.service';

describe('ViewbannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewbannerService]
    });
  });

  it('should be created', inject([ViewbannerService], (service: ViewbannerService) => {
    expect(service).toBeTruthy();
  }));
});

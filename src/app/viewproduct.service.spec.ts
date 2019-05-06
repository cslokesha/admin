import { TestBed, inject } from '@angular/core/testing';

import { ViewproductService } from './viewproduct.service';

describe('ViewproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewproductService]
    });
  });

  it('should be created', inject([ViewproductService], (service: ViewproductService) => {
    expect(service).toBeTruthy();
  }));
});

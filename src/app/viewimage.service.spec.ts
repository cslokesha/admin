import { TestBed, inject } from '@angular/core/testing';

import { ViewimageService } from './viewimage.service';

describe('ViewimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewimageService]
    });
  });

  it('should be created', inject([ViewimageService], (service: ViewimageService) => {
    expect(service).toBeTruthy();
  }));
});

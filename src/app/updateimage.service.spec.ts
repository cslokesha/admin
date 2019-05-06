import { TestBed, inject } from '@angular/core/testing';

import { UpdateimageService } from './updateimage.service';

describe('UpdateimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateimageService]
    });
  });

  it('should be created', inject([UpdateimageService], (service: UpdateimageService) => {
    expect(service).toBeTruthy();
  }));
});

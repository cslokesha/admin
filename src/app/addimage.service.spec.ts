import { TestBed, inject } from '@angular/core/testing';

import { AddimageService } from './addimage.service';

describe('AddimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddimageService]
    });
  });

  it('should be created', inject([AddimageService], (service: AddimageService) => {
    expect(service).toBeTruthy();
  }));
});

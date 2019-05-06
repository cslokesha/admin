import { TestBed, inject } from '@angular/core/testing';

import { UpdatebannerService } from './updatebanner.service';

describe('UpdatebannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatebannerService]
    });
  });

  it('should be created', inject([UpdatebannerService], (service: UpdatebannerService) => {
    expect(service).toBeTruthy();
  }));
});

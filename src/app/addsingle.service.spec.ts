import { TestBed, inject } from '@angular/core/testing';

import { AddsingleService } from './addsingle.service';

describe('AddsingleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsingleService]
    });
  });

  it('should be created', inject([AddsingleService], (service: AddsingleService) => {
    expect(service).toBeTruthy();
  }));
});

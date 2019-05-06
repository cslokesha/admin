import { TestBed, inject } from '@angular/core/testing';

import { AddcategoryService } from './addcategory.service';

describe('AddcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcategoryService]
    });
  });

  it('should be created', inject([AddcategoryService], (service: AddcategoryService) => {
    expect(service).toBeTruthy();
  }));
});

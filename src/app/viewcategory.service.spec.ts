import { TestBed, inject } from '@angular/core/testing';

import { ViewcategoryService } from './viewcategory.service';

describe('ViewcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewcategoryService]
    });
  });

  it('should be created', inject([ViewcategoryService], (service: ViewcategoryService) => {
    expect(service).toBeTruthy();
  }));
});

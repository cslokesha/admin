import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbulkComponent } from './addbulk.component';

describe('AddbulkComponent', () => {
  let component: AddbulkComponent;
  let fixture: ComponentFixture<AddbulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

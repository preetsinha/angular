import { TestBed } from '@angular/core/testing';

import { ShopeService } from './shope.service';

describe('ShopeService', () => {
  let service: ShopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

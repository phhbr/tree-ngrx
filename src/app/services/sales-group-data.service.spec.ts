import { TestBed } from '@angular/core/testing';

import { SalesGroupDataService } from './sales-group-data.service';

describe('SalesGroupDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesGroupDataService = TestBed.get(SalesGroupDataService);
    expect(service).toBeTruthy();
  });
});

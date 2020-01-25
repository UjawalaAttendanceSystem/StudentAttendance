import { TestBed } from '@angular/core/testing';

import { AttserviceService } from './attservice.service';

describe('AttserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttserviceService = TestBed.get(AttserviceService);
    expect(service).toBeTruthy();
  });
});

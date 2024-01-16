import { TestBed } from '@angular/core/testing';

import { WinesService } from './wines.service';

describe('WinesService', () => {
  let service: WinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Net5ServiceService } from './net5-service.service';

describe('Net5ServiceService', () => {
  let service: Net5ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Net5ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

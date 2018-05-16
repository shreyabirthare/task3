import { TestBed, inject } from '@angular/core/testing';

import { FunService } from './fun.service';

describe('FunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunService]
    });
  });

  it('should be created', inject([FunService], (service: FunService) => {
    expect(service).toBeTruthy();
  }));
});

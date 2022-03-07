/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandsService } from './bands.service';

describe('Service: Bands', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandsService]
    });
  });

  it('should ...', inject([BandsService], (service: BandsService) => {
    expect(service).toBeTruthy();
  }));
});

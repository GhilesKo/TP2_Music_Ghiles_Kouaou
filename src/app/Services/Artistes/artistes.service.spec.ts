/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistesService } from './artistes.service';

describe('Service: Artistes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistesService]
    });
  });

  it('should ...', inject([ArtistesService], (service: ArtistesService) => {
    expect(service).toBeTruthy();
  }));
});

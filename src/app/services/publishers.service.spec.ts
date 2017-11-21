import { TestBed, inject } from '@angular/core/testing';

import { PublishersService } from './publishers.service';

describe('PublishersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishersService]
    });
  });

  it('should ...', inject([PublishersService], (service: PublishersService) => {
    expect(service).toBeTruthy();
  }));
});

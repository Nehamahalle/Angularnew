import { TestBed } from '@angular/core/testing';

import { UpdateFictionService } from './update-fiction.service';

describe('UpdateFictionService', () => {
  let service: UpdateFictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

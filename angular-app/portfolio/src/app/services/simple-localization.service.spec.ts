import { TestBed } from '@angular/core/testing';

import { SimpleLocalizationService } from './simple-localization.service';

describe('SimpleLocalizationService', () => {
  let service: SimpleLocalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleLocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LocalProjectInfoService } from './local-project-info.service';

describe('LocalProjectInfoService', () => {
  let service: LocalProjectInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalProjectInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

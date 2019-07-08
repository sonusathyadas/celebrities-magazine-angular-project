import { TestBed } from '@angular/core/testing';

import { PersonGuardService } from './person-guard.service';

describe('PersonGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonGuardService = TestBed.get(PersonGuardService);
    expect(service).toBeTruthy();
  });
});

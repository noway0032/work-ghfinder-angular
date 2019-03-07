import { TestBed } from '@angular/core/testing';

import { GitResultService } from './git-result.service';

describe('GitResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitResultService = TestBed.get(GitResultService);
    expect(service).toBeTruthy();
  });
});

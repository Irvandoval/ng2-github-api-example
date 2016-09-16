/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitHubAPIService } from './git-hub-api.service';

describe('Service: GitHubAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubAPIService]
    });
  });

  it('should ...', inject([GitHubAPIService], (service: GitHubAPIService) => {
    expect(service).toBeTruthy();
  }));
});

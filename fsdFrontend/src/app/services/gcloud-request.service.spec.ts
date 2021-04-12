import { TestBed } from '@angular/core/testing';

import { GcloudRequestService } from './gcloud-request.service';

describe('GcloudRequestService', () => {
  let service: GcloudRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcloudRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InputdatatransferService } from './inputdatatransfer.service';

describe('InputdatatransferService', () => {
  let service: InputdatatransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputdatatransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

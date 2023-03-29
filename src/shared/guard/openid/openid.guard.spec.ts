import { TestBed } from '@angular/core/testing';

import { OpenidGuard } from './openid.guard';

describe('OpenidGuard', () => {
  let guard: OpenidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OpenidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

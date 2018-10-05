import { TestBed } from '@angular/core/testing';

import { YesornotService } from './yesornot.service';

describe('YesornotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YesornotService = TestBed.get(YesornotService);
    expect(service).toBeTruthy();
  });
});

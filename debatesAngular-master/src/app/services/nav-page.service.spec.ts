import { TestBed } from '@angular/core/testing';

import { NavPageService } from './nav-page.service';

describe('NavPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavPageService = TestBed.get(NavPageService);
    expect(service).toBeTruthy();
  });
});

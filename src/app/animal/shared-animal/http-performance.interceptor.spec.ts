import { TestBed } from '@angular/core/testing';

import { HttpPerformanceInterceptor } from './http-performance.interceptor';

describe('HttpPerformanceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpPerformanceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpPerformanceInterceptor = TestBed.inject(HttpPerformanceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

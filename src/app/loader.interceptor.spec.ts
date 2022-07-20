import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LoaderInterceptor],
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const interceptor: LoaderInterceptor = TestBed.inject(LoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });

  describe('showSpinner', () => {
    it('should show spinner', () => {
      const interceptor: LoaderInterceptor = TestBed.inject(LoaderInterceptor);
    });
  });
});

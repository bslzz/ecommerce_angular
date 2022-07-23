import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, tap, throwError } from 'rxjs';
import { LoaderService } from './services/common/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  public totalRequests = 0;
  public completedRequests = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.toggleLoader(true);
    this.totalRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.completedRequests++;
        if (this.totalRequests === this.completedRequests) {
          this.loaderService.toggleLoader(false);
          this.completedRequests = 0;
          this.totalRequests = 0;
        }
      }),
      tap({
        next: () => console.log('[next] Called'),
        error: (error) => throwError(() => new Error(error)),
        complete: () => console.log('[tap complete] Not called'),
      })
    );
  }
}

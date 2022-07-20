import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ProductService } from './shared/services/product.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private productService: ProductService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        this.productService.toggleLoader(true);
        if (event.type === HttpEventType.Response) {
          if (event.status === 200) {
            this.productService.toggleLoader(false);
          }
        }
      }),
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }
}

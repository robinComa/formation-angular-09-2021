import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpPerformanceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = Date.now();
    return next.handle(request).pipe(
      finalize(() => {
        const end = Date.now();
        const time = end - start;
        console.log(`${request.method} ${request.url} (${time}ms)`)
      })
    );
  }
}

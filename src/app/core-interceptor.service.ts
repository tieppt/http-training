import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = 'Bearer auth-token-here';
    // Clone the request to add the new header.
    const coreReq = req.clone({
      headers: req.headers.set('Authorization', authHeader)
        .set('Content-Type', 'application/json')
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(coreReq);
  }

}

export const coreInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CoreInterceptor,
  multi: true,
};

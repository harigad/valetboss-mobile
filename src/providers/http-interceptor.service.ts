import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {appConfig} from '../utils/app.config';
import {clearLocalStorage, getFromLocalStorage} from '../utils/local-storage';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf(appConfig.apiUrl) !== -1 && req.url.indexOf(appConfig.apiUrl+'login') === -1) {
      return this.handleRequest(req, next);
    }
    return next.handle(req);
  }

  private handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = getFromLocalStorage('VB_USER');
    if (auth && auth.token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${auth.token}`)
      });
    }
    return next.handle(req)
        .pipe(
            tap(
                (evt: HttpEvent<any>) => {
                  if (evt instanceof HttpResponse) {

                  }
                  return evt;
                },
                (err: any) => {
                  if (err instanceof HttpErrorResponse) {

                    if (err.status === 401) {
                      clearLocalStorage();
                      // TODO: Navigate to Login
                    }
                  }
                })
        );
  }
}

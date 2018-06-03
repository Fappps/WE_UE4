import {  Injectable} from '@angular/core';
import {  HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor} from '@angular/common/http';
import {  Observable} from 'rxjs/Observable';
import {  SessionStorageService} from '../services';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly sessionStorageService: SessionStorageService) {}

  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.sessionStorageService.loggedIn}`
      }
    });
    return next.handle(request);
  }
}

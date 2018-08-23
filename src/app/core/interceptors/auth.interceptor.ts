import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header (fake value is shown here)
    const authHeader = 'token 35ed425a4763ecd8ab114f88eb63432c12a19ec3'; // this.authService.getAuthHeader();
    const authReq = req.clone({headers: req.headers.set('authorization', authHeader)});
    return next.handle(authReq);
  }



}


   //let headers = new HttpHeaders().set('Content-Type', 'application/json');
     //   headers = headers.set('authorization', 'token 35ed425a4763ecd8ab114f88eb63432c12a19ec3');

       
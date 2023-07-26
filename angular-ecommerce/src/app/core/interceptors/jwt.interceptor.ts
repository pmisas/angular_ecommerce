import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    if (token) {
        //request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        //request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
    }
    console.log(request)
    return next.handle(request);
  }
}
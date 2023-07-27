import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let intReq = request;
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    if (token) {
        intReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)})
    }
    console.log(intReq)
    return next.handle(intReq);
  }
}
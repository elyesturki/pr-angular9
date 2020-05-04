import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class loginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error("Method not implemented.");
    //console.log("Requette interceptor: ",req)
    const token: string = localStorage.getItem('token');
    if(token) {
      const cloneReq = req.clone({
        params: new HttpParams().set('access_token', token)
      });
      return next.handle(cloneReq);
    } else {
      return next.handle(req);
    }

  }
}

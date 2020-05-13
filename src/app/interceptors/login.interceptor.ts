import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class loginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error("Method not implemented.");
    //console.log("Requette interceptor: ",req)
    const token: string = localStorage.getItem('token');
    if(token) {
      const keys = req.params.keys();
      console.log("keys params existants: ",keys);
      let params = new HttpParams();
      for (let i = 0; i < keys.length; i++) {
        params = params.append(keys[i], req.params.get(keys[i]));
      }
      const cloneReq = req.clone({
        /* --- Methode 3- récupere tous les anciens params et rajoute le token (success si on est logged) --- */
        params: params.append('access_token', token)

        /* --- Methode 2- Rajoute un nv params token et marche bien (success si on est logged) --- */
        // setParams: {
        //   'access_token': token
        // }

        // --- Methode 1- Ecrase les params (erreur si on est logged) --- */
        // params: new HttpParams().set('access_token', token)
      });
      return next.handle(cloneReq);
    } else {
      return next.handle(req);
    }

  }
}

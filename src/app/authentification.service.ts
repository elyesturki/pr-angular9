import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  linkAPILogin = 'http://localhost:3005/api/Users/login';
  constructor(private http: HttpClient) { }

  login(credentials) {
   // console.log("credentials: ",credentials)
    return this.http.post(this.linkAPILogin, credentials);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  checkLogin(log): Observable <Login>
  {
   return this.http.post<Login> ("https://api.jtsboard.com/web_servicesv35/login","log")
  }
}

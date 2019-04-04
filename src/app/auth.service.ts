import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { Popup } from './popup.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  checkLogin(log): Observable <Login>
  {
   return this.http.post<Login> ("https://api.jtsboard.com/web_servicesv30/login",log)
  }

  createcode(unique_sales_code:Popup):Observable <Popup>
  {
   return this.http.post<Popup> ("https://api.jtsboard.com/web_servicesv36/check_sales_user_code",unique_sales_code)
  }
}

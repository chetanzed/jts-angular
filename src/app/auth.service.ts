import { Injectable } from '@angular/core'
import { Observable, from } from 'rxjs'
import { Login } from './login.model'
import { Popup } from './popup.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterForm } from './registration.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  checkLogin(log): Observable<Login> {
    return this.http.post<Login>(
      'https://api.jtsboard.com/web_service_angular/login',
      log
    )
  }

  createcode(log1): Observable<Popup> {
    return this.http.post<Popup>(
      'https://api.jtsboard.com/web_service_angular/check_sales_user_code',
      log1
    )
  }

  registration(reg): Observable<RegisterForm> {
    console.log(reg)
    return this.http.post<RegisterForm>(
      'https://api.jtsboard.com/web_service_angular/add_sales_user',
      reg
    )
  }
}

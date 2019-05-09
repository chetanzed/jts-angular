import { Injectable } from '@angular/core'
import { Observable, from } from 'rxjs'
import { Login } from './Models/login.model'
import { Popup } from './Models/popup.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterForm } from './Models/registration.model';
import { contactResponse } from './Models/contactResponse.model';
import { eventResponse } from './Models/eventResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

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
    
    return this.http.post<RegisterForm>(
      'https://api.jtsboard.com/web_service_angular/add_sales_user',
      reg
    );
  }
  creatContact(contactForm): Observable<contactResponse> {
  return this.http.post<contactResponse>('https://api.jtsboard.com/web_service_angular/contact_form',contactForm);
  }

  creatEvent(eve):Observable<eventResponse>{
    
    return this.http.post<eventResponse>('https://api.jtsboard.com/web_service_angular/event_form',eve);
      }
}

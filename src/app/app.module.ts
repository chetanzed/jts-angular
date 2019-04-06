import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { HttpClientModule,HttpClient}    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootarComponent } from './footar/footar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ConferenceComponent } from './conference/conference.component';
import { RecruitComponent } from './recruit/recruit.component';
import { AdminComponent } from './admin/admin.component';
import {  AuthService } from './auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { FaqComponent } from './faq/faq.component';
import { FunctionComponent } from './function/function.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ThanksComponent } from './thanks/thanks.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootarComponent,
    LandingPageComponent,
    LoginComponent,
    ConferenceComponent,
    RecruitComponent,
    AdminComponent,
    RegistrationComponent,
    SignupComponent,
    FaqComponent,
    FunctionComponent,
    HowToUseComponent,
    ThanksComponent,
    RegistrationDetailsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    HttpClientModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

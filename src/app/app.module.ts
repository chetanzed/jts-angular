import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FootarComponent } from './footar/footar.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { LoginComponent } from './login/login.component'

import { RecruitComponent } from './recruit/recruit.component'
import { AdminComponent } from './admin/admin.component'
import { AuthService } from './auth.service'
import { RegistrationComponent } from './registration/registration.component'
import { SignupComponent } from './signup/signup.component'
import { FaqComponent } from './faq/faq.component'
import { FunctionComponent } from './function/function.component'
import { HowToUseComponent } from './how-to-use/how-to-use.component'
import { ThanksComponent } from './thanks/thanks.component'
import { RegistrationDetailsComponent } from './registration-details/registration-details.component'
import { NewsComponent } from './news/news.component'
import { AuthComponent } from './auth/auth.component'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { defineLocale } from 'ngx-bootstrap/chronos';
import { jaLocale } from 'ngx-bootstrap/locale';
defineLocale('ja', jaLocale);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootarComponent,
    LandingPageComponent,
    LoginComponent,
    RecruitComponent,
    AdminComponent,
    RegistrationComponent,
    SignupComponent,
    FaqComponent,
    FunctionComponent,
    HowToUseComponent,
    ThanksComponent,
    RegistrationDetailsComponent,
    NewsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

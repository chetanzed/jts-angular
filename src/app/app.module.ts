
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule, HttpClient } from '@angular/common/http'

import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FootarComponent } from './footar/footar.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { LoginComponent } from './login/login.component'

import { RecruitComponent } from './recruit/recruit.component'

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
import { EventComponent } from './event/event.component';
import { NewsBlog1Component } from './news-blog1/news-blog1.component';
import { NewsBlogsComponent } from './news-blogs/news-blogs.component';
import { Newsblog2Component } from './newsblog2/newsblog2.component';
import { JtsBoardPart1SuccessComponent } from './jts-board-part1-success/jts-board-part1-success.component';
import { AIBeautyInnovationSeminer2020Component } from './ai-beauty-innovation-seminer2020/ai-beauty-innovation-seminer2020.component';
import { Blog4Component } from './blog4/blog4.component';
import { NewsBlog3Component } from './news-blog3/news-blog3.component';
import { NewsBlog4Component } from './news-blog4/news-blog4.component';

defineLocale('ja', jaLocale);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootarComponent,
    LandingPageComponent,
    LoginComponent,
    RecruitComponent,
   
    RegistrationComponent,
    SignupComponent,
    FaqComponent,
    FunctionComponent,
    HowToUseComponent,
    ThanksComponent,
    RegistrationDetailsComponent,
    NewsComponent,
    AuthComponent,
    EventComponent,
    NewsBlog1Component,
    NewsBlogsComponent,
    Newsblog2Component,
    JtsBoardPart1SuccessComponent,
    AIBeautyInnovationSeminer2020Component,
    Blog4Component,
    NewsBlog3Component,
    NewsBlog4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}


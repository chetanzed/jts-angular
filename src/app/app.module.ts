import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TextMaskModule } from 'angular2-text-mask';

import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FootarComponent } from './footar/footar.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { LoginComponent } from './login/login.component'

import { RecruitComponent } from './recruit/recruit.component'
import { AdminComponent } from './admin/admin/admin.component'
import { AuthService } from './services/auth.service'
import { RegistrationComponent } from './registration/registration.component'
import { SignupComponent } from './signup/signup.component'
import { FaqComponent } from './faq/faq.component'
import { FunctionComponent } from './function/function.component'
import { HowToUseComponent } from './how-to-use/how-to-use.component'
import { ThanksComponent } from './thanks/thanks.component'
import { RegistrationDetailsComponent } from './registration-details/registration-details.component'
import { NewsComponent } from './news/news.component'
import { AuthComponent } from './auth/auth.component'


import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SechdulerComponent } from './admin/sechduler/sechduler.component';
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
    AuthComponent,
    CustomerListComponent,
    DashboardComponent,
    SechdulerComponent,   
  ],
  imports: [
    ScheduleAllModule, RecurrenceEditorAllModule,   NumericTextBoxAllModule, 
    DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule, 
    ToolbarAllModule,   DropDownListAllModule, ContextMenuAllModule, MaskedTextBoxModule, 
    UploaderAllModule, MultiSelectAllModule, BrowserModule,
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

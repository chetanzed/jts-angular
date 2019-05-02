import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

import { RecruitComponent } from './recruit/recruit.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';import { FaqComponent } from './faq/faq.component';
import { FunctionComponent } from './function/function.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ThanksComponent } from './thanks/thanks.component';
import { NewsComponent } from './news/news.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { EventComponent } from './event/event.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'recruit',component: RecruitComponent},
  {path:'register',component:RegistrationComponent},
  {path: 'login',   component: LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'admin', canActivate:[AuthGuard], component: AdminComponent},
 
  {path :'function',component: FunctionComponent },
  {path :'thanks',component: ThanksComponent },
  {path :'faq',component: FaqComponent },
  {path :'news',component: NewsComponent },
  {path :'registration-detail',component: RegistrationDetailsComponent },
{path : 'event', component: EventComponent},
  {path :'how-to-use',component: HowToUseComponent  },

  // {path :'who-use',component: }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

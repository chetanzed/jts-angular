import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ConferenceComponent } from './conference/conference.component';
import { RecruitComponent } from './recruit/recruit.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'recruit',component: RecruitComponent},
  {path:'register',component:RegistrationComponent},


  {path: 'login',   component: LoginComponent},
  {path: 'admin', canActivate:[AuthGuard], component: AdminComponent},
  {path: 'conference', component: ConferenceComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

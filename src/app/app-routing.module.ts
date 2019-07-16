
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

import { RecruitComponent } from './recruit/recruit.component';

import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component'; import { FaqComponent } from './faq/faq.component';
import { FunctionComponent } from './function/function.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ThanksComponent } from './thanks/thanks.component';
import { NewsComponent } from './news/news.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { EventComponent } from './event/event.component';
import { NewsBlog1Component } from './news-blog1/news-blog1.component';
import { NewsBlogsComponent } from './news-blogs/news-blogs.component';
import { Newsblog2Component } from './newsblog2/newsblog2.component';
import { JtsBoardPart1SuccessComponent } from './jts-board-part1-success/jts-board-part1-success.component';
import { AIBeautyInnovationSeminer2020Component } from './ai-beauty-innovation-seminer2020/ai-beauty-innovation-seminer2020.component';
import { Blog4Component } from './blog4/blog4.component';
import { NewsBlog3Component } from './news-blog3/news-blog3.component';
import { NewsBlog4Component } from './news-blog4/news-blog4.component';
import { NewsBlog5Component } from './news-blog5/news-blog5.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'recruit', component: RecruitComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'thank-success-step-first', component: JtsBoardPart1SuccessComponent },
  { path: 'function', component: FunctionComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: 'news', component: NewsBlogsComponent,
    children: [
      { path: '', component: NewsComponent },
      { path: '学校訪問記', component: NewsBlog1Component },
      { path: '広告について', component: Newsblog2Component },
      { path: 'AI-Beauty-Innovation-seminer2020を開催', component: AIBeautyInnovationSeminer2020Component },
      { path: '次世代のサロン管理システム', component: Blog4Component },
      { path: 'サロン予約はどうしていますか', component: NewsBlog3Component },
      { path: '予約アプリにどうしてＡＩが必要', component: NewsBlog4Component },
      { path: 'AIがキャンセルの穴を埋めてくれる', component: NewsBlog5Component}
    ]
  },
  { path: 'registration-detail', component: RegistrationDetailsComponent },
  { path: 'event', component: EventComponent },
  { path: 'how-to-use', component: HowToUseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

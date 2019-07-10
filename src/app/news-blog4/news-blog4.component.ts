import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-news-blog4',
  templateUrl: './news-blog4.component.html',
  styleUrls: ['./news-blog4.component.css']
})
export class NewsBlog4Component implements OnInit {
firstLoad = true;
constructor(private title: Title, private meta: Meta, private seoService: SEOService) { }

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
     //sco start==================================//
     this.title.setTitle('予約アプリにどうしてＡＩが必要？');
     this.meta.updateTag({ name: 'description', content: 'こんにちは、広報担当のYUKIです。今日もJTSBoardの機能をご紹介しますね！みなさんはサロンの予約管理、どうされていますか？？ 小規模サロン様やオーナー１人のサロン様ほど、' });
     this.seoService.generateTags({
       title: '予約アプリにどうしてＡＩが必要？',
       description: 'こんにちは、広報担当のYUKIです。今日もJTSBoardの機能をご紹介しますね！みなさんはサロンの予約管理、どうされていますか？？ 小規模サロン様やオーナー１人のサロン様ほど、',
       image: 'http://localhost:4200/assets/images/main-logo-header.png\'',
       slug: '予約アプリにどうしてＡＩが必要？'
     });
     this.seoService.createCanonicalURL();
     //   // sco end ==================//
  }

}

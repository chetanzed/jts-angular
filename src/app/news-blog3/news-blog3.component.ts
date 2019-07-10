import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEOService } from '../seo.service';
@Component({
  selector: 'app-news-blog3',
  templateUrl: './news-blog3.component.html',
  styleUrls: ['./news-blog3.component.css']
})
export class NewsBlog3Component implements OnInit {
  firstLoad: boolean = true;
  constructor(private title: Title, private meta: Meta, private seoService: SEOService) { }

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
    //sco start==================================//
    this.title.setTitle('サロン予約はどうしていますか？');
    this.meta.updateTag({ name: 'description', content: 'こんにちは、広報担当のYUKIです。今日もJTSBoardの機能をご紹介しますね！みなさんはサロンの予約管理、どうされていますか？？ 小規模サロン様やオーナー１人のサロン様ほど、' });
    this.seoService.generateTags({
      title: 'サロン予約はどうしていますか？',
      description: 'こんにちは、広報担当のYUKIです。今日もJTSBoardの機能をご紹介しますね！みなさんはサロンの予約管理、どうされていますか？？ 小規模サロン様やオーナー１人のサロン様ほど、',
      image: 'http://localhost:4200/assets/images/main-logo-header.png\'',
      slug: 'サロン予約はどうしていますか？'
    });
    this.seoService.createCanonicalURL();
    //   // sco end ==================//
  }

}

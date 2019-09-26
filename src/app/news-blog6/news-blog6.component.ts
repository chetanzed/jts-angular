import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news-blog6',
  templateUrl: './news-blog6.component.html',
  styleUrls: ['./news-blog6.component.css']
})
export class NewsBlog6Component implements OnInit {
firstLoad:boolean = true;
  constructor(private seoService: SEOService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    if(this.firstLoad){
      window.scroll(0,0);
      this.firstLoad= false;
    }
    this.title.setTitle('サロン開業に必要なこと①～サロンカルテは活用できていますか？？～ - JTS BOARD');
    this.meta.updateTag({ name: 'description', content: '先日、エステオーナーさんと話していて気付いたことがありました。お客様の満足度を高めるために欠かせないカウンセリングですが 普段、みなさんはどのようにお客様とコミュニケーションをとっていますか？？'})
    this.seoService.generateTags({
      title: 'サロン開業に必要なこと①～サロンカルテは活用できていますか？？～ - JTS BOARD',
      description: '先日、エステオーナーさんと話していて気付いたことがありました。お客様の満足度を高めるために欠かせないカウンセリングですが 普段、みなさんはどのようにお客様とコミュニケーションをとっていますか？？',
      image: 'http://localhost:4200/assets/images/main-logo-header.png\''
    });
  }

}

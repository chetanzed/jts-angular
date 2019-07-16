import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news-blog5',
  templateUrl: './news-blog5.component.html',
  styleUrls: ['./news-blog5.component.css']
})
export class NewsBlog5Component implements OnInit {
  firstLoad = true;
  constructor(private seoService: SEOService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
    this.title.setTitle('AIがキャンセルの穴を埋めてくれる - JTS BOARD');
    this.meta.updateTag({ name: 'discripution', content: 'みなさまこんにちは！大好きなお客様からお土産をいただきました！ブルドーザーこと、大原めぐみです。' })
    this.seoService.generateTags({
      title: 'AIがキャンセルの穴を埋めてくれる - JTS BOARD',
      discripution: 'みなさまこんにちは！大好きなお客様からお土産をいただきました！ブルドーザーこと、大原めぐみです。',
      image: 'http://localhost:4200/assets/images/main-logo-header.png\''
    });
  }

}

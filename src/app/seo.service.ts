import { Injectable, Inject } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(private meta: Meta, private title: Title, @Inject(DOCUMENT) private dom) { }
  generateTags(config) {
    config = { title: 'サロン予約システム | サロン管理システム - JTS Board',
      description: 'サロン予約システム | サロン管理システム - JTS Boardはサロン業務全てのたった１つのアプリで管理することが可能。日本初AI機能も搭載。ユーザー満足度は98%です。',
      image: 'http://localhost:4200/assets/images/main-logo-header.png',
      slug: '', config
    }
    // this.meta.updateTag({ name: 'twitter:card', content: '' });
    // this.meta.updateTag({ name: 'twitter:site', content: 'https://twitter.com/zedinternation1' });
    // this.meta.updateTag({ name: 'twitter:title', content: config.title });
    // this.meta.updateTag({ name: 'twitter:description', content: config.description });
    // this.meta.updateTag({ name: 'twitter:image', content: config.image });

    // this.meta.updateTag({ property: 'og:type', content: '' });
    // this.meta.updateTag({ property: 'og:site_name', content: '' });
    // this.meta.updateTag({ property: 'og:title', content: config.title });
    // this.meta.updateTag({ property: 'og:description', content: config.description });
    // this.meta.updateTag({ property: 'og:image', content: config.image });
    // this.meta.updateTag({ property: 'og:url', content: `https://zedtechnosolutions.com/${config.slug}` });
  }
  createCanonicalURL() {
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }
}
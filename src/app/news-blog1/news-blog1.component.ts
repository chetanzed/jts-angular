import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-blog1',
  templateUrl: './news-blog1.component.html',
  styleUrls: ['./news-blog1.component.css']
})
export class NewsBlog1Component implements OnInit {
  firstLoad:boolean=true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}

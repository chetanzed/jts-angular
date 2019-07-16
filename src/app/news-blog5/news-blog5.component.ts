import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-blog5',
  templateUrl: './news-blog5.component.html',
  styleUrls: ['./news-blog5.component.css']
})
export class NewsBlog5Component implements OnInit {
firstLoad = true;
  constructor() { }

  ngOnInit() {
    if (this.firstLoad) {
window.scroll(0, 0 );
this.firstLoad = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-blog4',
  templateUrl: './news-blog4.component.html',
  styleUrls: ['./news-blog4.component.css']
})
export class NewsBlog4Component implements OnInit {
firstLoad = true;
  constructor() { }

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
  }

}

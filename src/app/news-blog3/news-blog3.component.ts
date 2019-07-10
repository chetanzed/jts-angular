import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-blog3',
  templateUrl: './news-blog3.component.html',
  styleUrls: ['./news-blog3.component.css']
})
export class NewsBlog3Component implements OnInit {
firstLoad: boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) { 
      window.scroll(0, 0);
      this.firstLoad = false;
    }
  }

}

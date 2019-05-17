import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsblog2',
  templateUrl: './newsblog2.component.html',
  styleUrls: ['./newsblog2.component.css']
})
export class Newsblog2Component implements OnInit {
firstLoad: boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}

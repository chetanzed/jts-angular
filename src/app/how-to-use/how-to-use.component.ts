import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css']
})
export class HowToUseComponent implements OnInit {

  constructor() { }
  firstLoad:boolean=true;
  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}

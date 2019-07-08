import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-beauty-innovation-seminer2020',
  templateUrl: './ai-beauty-innovation-seminer2020.component.html',
  styleUrls: ['./ai-beauty-innovation-seminer2020.component.css']
})
export class AIBeautyInnovationSeminer2020Component implements OnInit {
firstLoad:boolean=true;
  constructor() { }

  ngOnInit() {
  if(this.firstLoad){
    window.scroll(0,0);
    this.firstLoad=false;
  }
  }

}

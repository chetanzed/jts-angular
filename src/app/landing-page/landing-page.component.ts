import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.js-anchor-link').click(function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      if(target.length){
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      }
    });


  }

}

import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  constructor() { }
  firstLoad: boolean = true;

  ngOnInit() {
                     // Read More Jquery Start first
    $(document).ready(function () {
      // Configure/customize these variables.
      var showChar = 70; // How many characters are shown by default
      var ellipsestext = '...';
      var moretext = "続きを読む <i class='fas fa-arrow-circle-right'></i>"
      var lesstext = "もっと読む <i class='fas fa-arrow-circle-right'></i>"

      $('.moref').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar)
          var h = content.substr(showChar, content.length - showChar)

          var html =
            c +
            '<span class="moreellipses">' +
            ellipsestext +
            '&nbsp;</span><span class="morecontent"><span>' +
            h +
            '</span>&nbsp;&nbsp;<a href="#" class="morelink">' +
            moretext +
            '</a></span>'

          $(this).html(html);
        }
      });

      $('.morelink').click(function () {
        if ($(this).hasClass('less')) {
          $(this).removeClass('less');
          $(this).html(moretext);
        } else {
          $(this).addClass('less');
          $(this).html(lesstext);
        }
        $(this)
          .parent()
          .prev()
          .toggle()
        $(this)
          .prev()
          .toggle()
        return false;
      });
    });

    // Read More Jquery End


    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
  }

}

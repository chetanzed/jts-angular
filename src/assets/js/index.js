
$(document).ready(function() {
          $("#owl-demo1").owlCarousel({
          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem : true,
          //Autoplay
            autoPlay : true,
            stopOnHover : true,
             navigationText: [
            "<span class='icon-left-arrow'></span>",    
            "<span class='icon-right-arrow'></span>"],

          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

          });
        });


        $(document).ready(function() {
          $("#owl-demo").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem : true,
            pagination: true,
          //Autoplay
            autoPlay : true,
            stopOnHover : true,
             navigationText: [
            "<i class='fas fa-angle-left'></i>",    
            "<i class='fas fa-angle-right'></i>"],
          });

        });



        var btn = $('#back-top-button');

        $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });

        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });




/*
  Smooth scroll functionality for anchor links (animates the scroll
  rather than a sudden jump in the page)
*/

$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { signupDetail } from 'src/app/Models/signupDetail';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  contactForm: FormGroup;
  signupForm: FormGroup;
  signup = new signupDetail();

  datasaved = false;
  msg: any;
  submitted = false;
  constructor(private fb: FormBuilder, private authservice: AuthService,private router:Router ) { }

  ngOnInit() {
    $('.js-anchor-link').click(function (e) {
      e.preventDefault();
      var target = $($(this).attr('href'));
      if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
      }
    });
    $(document).ready(function () {
      $("#owl-demo1").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        //Autoplay
        autoPlay: true,
        stopOnHover: true,
        navigationText: [
          "<span class='icon-left-arrow'></span>",
          "<span class='icon-right-arrow'></span>"],
      });
    });

    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });


    $(document).ready(function () {
      $("#owl-demo").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        //Autoplay
        autoPlay: true,
        stopOnHover: true,
        navigationText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>"],
      });
    });


    $(document).ready(function () {
      $("#owl-demo2").owlCarousel({
        autoPlay: false,
        items: 3,
        center: true,
        loop: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsiPad: [767, 2],
        itemsmobile: [575, 1],
      });
    });


    var btn = $('#back-top-button');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /*
    Smooth scroll functionality for anchor links (animates the scroll
    rather than a sudden jump in the page)
    */

    $('.js-anchor-link').click(function (e) {
      e.preventDefault();
      var target = $($(this).attr('href'));
      if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
      }
    });



    // Read More Jquery Start first
    $(document).ready(function () {
      // Configure/customize these variables.
      var showChar = 40 // How many characters are shown by default
      var ellipsestext = '...';
      var moretext = "続きを読む <i class='fas fa-arrow-circle-right'></i>"
      var lesstext = "もっと読む <i class='fas fa-arrow-circle-right'></i>";

      $('.more').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

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
      })

      $('.morelink').click(function() {
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
          .toggle();
        $(this)
          .prev()
          .toggle();
        return false;
      });
    });
    // Read More Jquery End
   
    //siginup From Group
    this.signupForm = this.fb.group({
      device_type: ['angular'],
      salon_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwordMatch: this.fb.group({
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]]
      }, { validator: this.passwordMatch }),
    });

  }
  //Password matching start

  passwordMatch(control: AbstractControl): { [key: string]: any } | null {
    var password = control.get('password');
    var confirm_password = control.get('confirm_password');

    if (password.value == confirm_password.value) {
      return null;
    } else {
      return { passwordMatch: true };
    }
  }
  //Password matching end

  onSignup() {
    this.signup.device_type = this.signupForm.get('device_type').value;
    this.signup.salon_name = this.signupForm.get('salon_name').value;
    this.signup.email = this.signupForm.get('email').value;
    this.signup.password = this.signupForm.get('passwordMatch').get('password').value;
    this.signup.confirm_password = this.signupForm.get('passwordMatch').get('confirm_password').value;

    this.authservice.createSignup(this.signup)
      .subscribe(data => {
        console.log(data);
        if (data.status == "error") {
          this.msg = data.msg;
          this.datasaved = true;
          return false;
        }
        else {
         
          this.router.navigate(['thank-success-part-1']);
        }
      });
  }
  //signup From end//



  onContact() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    else {
      console.log(this.contactForm);
      this.authservice.creatContact(this.contactForm.value).subscribe(data => {
        console.log(data);
        this.msg = data.msg;
        this.datasaved = true;
        this.submitted = false;
        this.contactForm.reset();

      });

    }
  }

  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

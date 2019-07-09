import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Login1 } from '../Models/login1.model';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Login1 = new Login1();
  signinForm: FormGroup;

  constructor(private router: Router, private authservice: AuthService, private fb: FormBuilder) { }

  ngOnInit() {

    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  onSignin() {


    let form = new FormData();
    form.set('email', this.signinForm.get('email').value);
    form.set('password', this.signinForm.get('password').value);
    this.authservice.loginUser(form)
      .subscribe(data => {
        console.log(data);

        if (data.status == 'success') {
          localStorage.setItem("isLoggedin", "yes");
          this.router.navigate(['admin'])
        } else {
          alert(data.msg1);
        }
      });
  }
}

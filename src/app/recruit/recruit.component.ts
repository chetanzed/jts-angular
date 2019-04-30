import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Popup } from '../Models/popup.model';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { RegisterForm } from '../Models/registration.model'

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {
resp:any;
  log1: Popup = new Popup();
  reg: RegisterForm = new RegisterForm();

  popupForm: FormGroup;
  constructor(private router: Router, private authservice: AuthService, private fb: FormBuilder) { }

  firstLoad: boolean = true;
  ngOnInit() {
    this.popupForm = this.fb.group({
      unique_sales_code: ['', [Validators.required]]
    });

    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
  }
  onSubmit() {
    this.log1.unique_sales_code = this.popupForm.get('unique_sales_code').value;
    this.authservice.createcode(this.log1)
      .subscribe(data => {
        console.log(data)

        if (data.status == "success") {
          this.router.navigate(['register'], {
            queryParams:
              { unique_sales_code: this.popupForm.get('unique_sales_code').value }
          });
        } else {
         // alert(data.msg1);
          this.resp = data.msg;
        }
      });
  }
}

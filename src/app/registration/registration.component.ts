import { Component, OnInit } from '@angular/core';
import {NgModel } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterForm } from '../registration.model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private router:Router,private AuthService:AuthService, private route:ActivatedRoute) { }
  
  rform:RegisterForm=new RegisterForm();

  ngOnInit() {
     
    this.route.queryParamMap.subscribe(data=>{
      alert(data.get('usc'));
      this.rform.master_sales_code=data.get('usc');
      alert(this.rform.master_sales_code);
    })
    // this.registerForm =new FormGroup(
    //   {
    //     "kana": new FormControl(null),
    //     "kanji": new FormControl(null),
    //     "tel": new FormControl(null),
    //     "email": new FormControl(null),
    //     "dob": new FormControl(null),
    //     "password": new FormControl(null),
    //     "confirm_password": new FormControl(null),
    //     "zip_code": new FormControl(null),
    //     "address": new FormControl(null),
    //     "dl_front_img": new FormControl(null),
    //     "dl_back_img": new FormControl(null),
    //     "bank_name": new FormControl(null),
    //     "bank_name_kana": new FormControl(null),
    //     "bank_number": new FormControl(null),
    //     "branch": new FormControl(null),
    //     "branch_kana": new FormControl(null),
    //     "branck_code": new FormControl(null),
    //     "what_kind_of_bank": new FormControl(null),
    //     "account_number": new FormControl(null),
    //     "account_holder_name_kana": new FormControl(null),
    //     "account_holder_name": new FormControl(null)
    
    //   })
  }
  onRegister(){
    


this.AuthService.registration



  }

}

import { Component, OnInit } from '@angular/core';
import {NgModel } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterForm } from '../registration.model';
import { registrationResponse} from '../registrationResponse.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registerForm: FormGroup;
  // submitted = false;
  reg:RegisterForm= new RegisterForm();
 
  
  constructor(private router:Router,private authservice:AuthService, private route:ActivatedRoute) { }
  
  rform:RegisterForm=new RegisterForm();
  firstLoad:Boolean = true;
  ngOnInit() {
    
 
this.reg.kana="";
this.reg.kanji="";
this.reg.email="";
this.reg.password="";
this.reg.tel="";
this.reg.dob="";
this.reg.zip_code="";
this.reg.address="";
// this.reg.dl_front_img="";
// this.reg.dl_back_img="";
this.rform.master_sales_code="";
this.reg.bank_name="";
this.reg.bank_name_kana="";
this.reg.bank_number="";
this.reg.branch="";
this.reg.branch_kana="";
this.reg.branch_code="";
this.reg.what_kind_of_bank="";
this.reg.account_number="";
this.reg.account_holder_name_kana="";
this.reg.account_holder_name="";
      
if(this.firstLoad) {
  window.scroll(0,0);
  this.firstLoad = false;
}
        
      this.route.queryParamMap.subscribe(data=>{

      // alert(data.get('usc'));

      this.rform.master_sales_code=data.get('usc');

      // alert(this.rform.master_sales_code);
    })
    
  }
  onRegister(reg){
    console.log(reg);
   
    // alert("i am submiting regForm "+this.reg.name);
    
    this.authservice.registration(this.reg)
.subscribe(data =>{
      
 console.log ()
 if(data.status == "success")
 {
   alert("Thank you for Submission, you are Registred Now ")
   // localStorage.setItem("isLoggedin","yes");
// this.route.navigate(['register'],{queryParams:{usc:data.unique_sales_code}});
 }
 else{
   
      alert("sorry please fill the details properly")
 }

});





  }

}

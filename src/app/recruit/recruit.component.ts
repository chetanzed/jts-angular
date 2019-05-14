import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Popup } from '../Models/popup.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {
  msg: any;
  submitted = false;
  contactForm: FormGroup;
  log1:Popup=new Popup();
  constructor(private router:Router,private fb:FormBuilder, private authservice:AuthService) { }

  firstLoad:boolean=true;
  ngOnInit() {
    this.log1.unique_sales_code = "";
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
    // contactform
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  onSubmit(){
    // alert("i am submiting"+this.log1.unique_sales_code);
    
     this.authservice.createcode(this.log1)
.subscribe(data =>{
       
  console.log (data)
  if(data.status=="success")
  {
    // localStorage.setItem("isLoggedin","yes");
    this.router.navigate(['register'],{queryParams:{rfc:data.unique_sales_code}});
  }
  else{
    this.log1.unique_sales_code
       alert("unique_sales_code: " +this.log1.unique_sales_code + "" +" is not Valid");
  }

 });
  }


  // contact from
  onContact() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    else {
      console.log(this.contactForm);
      this.authservice.creatContact(this.contactForm.value).subscribe(data => {
        console.log(data);
        this.msg= data.msg;
   
        this.submitted = false;
        this.contactForm.reset();

      });
      
    }
  }

  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {

  constructor(private route:Router, private authservice:AuthService) { }

  ngOnInit() {
  }
  onSubmit(){
    var log1= {
      "unique_sales_code": "JTSB123456"
  
     }
     this.authservice.createcode(log1)
.subscribe(data =>{
       
  console.log (data)
  if(data.msg1)
  {
    localStorage.setItem("isLoggedin","yes");
    this.route.navigate(['register'])
  }
  else{
alert("sorry")
  }

 });
  }
}

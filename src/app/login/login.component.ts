import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= "mannysahu.zed@gmail.com";
  password= "123456"

  constructor(private route:Router, private authservice:AuthService) { }

  ngOnInit() {
  }
  
  onSignin(){
    var log= {
      "email": "mannysahu.zed@gmail.com", "password":"123456"
     }
this.authservice.checkLogin(log)
.subscribe(data =>{
       
  if(data.user_id)
  {

    localStorage.setItem("isLoggedin","yes");
this.route.navigate(['admin'])
   

  }
  else{
alert("sorry")
  }

 });
  }
}

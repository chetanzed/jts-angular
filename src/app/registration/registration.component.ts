import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterForm } from '../registration.model';


import { from } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  frontImage: string;
  reg:RegisterForm= new RegisterForm();
 
  
  constructor(private router:Router,private authservice:AuthService, private route:ActivatedRoute) { }
  
  rform:RegisterForm=new RegisterForm();
  firstLoad:Boolean = true;
  ngOnInit() {
    if(this.firstLoad) {
  window.scroll(0,0);
  this.firstLoad = false;
}
        
      this.route.queryParamMap.subscribe(data=>{

      // alert(data.get('usc'));

      this.rform.master_sales_code=data.get('usc');
      this.reg.master_sales_code=data.get('usc');

      // alert(this.rform.master_sales_code);
      // console.log('jhds', this.reg)
    })
    
  }
  onRegister(reg){
    console.log(reg);
   
    // alert("i am submiting regForm "+this.reg.name);
    if (this.reg.dl_front_img && this.reg.dl_back_img) {
      this.authservice.registration(reg)
.subscribe(data =>{
      
 console.log (data)
 if(data.status == "success")
 {
  //  alert("Thank you for Submission, you are Registred Now ")
   // localStorage.setItem("isLoggedin","yes");
this.router.navigate(['thanks'])
 }
 else{
   
      alert("sorry please fill the details properly")
 }

});
    }
    

}

// W64
// changeListener($event) : void {
//   this.readThis($event.target);
// }

// readThis(inputValue: any): void {
//   let image;
//   var file:File = inputValue.files[0];
//   var myReader:FileReader = new FileReader();

//   myReader.onloadend = (e) => {
//     // image = myReader.result;
//     this.reg.dl_front_img = myReader.result;
//     console.log('hvdchvds', this.reg.dl_front_img)
//   }
  
//   myReader.readAsDataURL(file);
// }

}

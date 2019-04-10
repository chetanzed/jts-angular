import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterForm } from '../registration.model';

declare var $:any;
import { from } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  frontImage:string;
  backImage:string;
  what_kind_of_back:string;
    reg:RegisterForm= new RegisterForm();
    
  
  constructor(private router:Router,private authservice:AuthService, private route:ActivatedRoute) { }
  
  rform:RegisterForm=new RegisterForm();
  firstLoad:Boolean = true;
  ngOnInit() {
    // $("#files").change(function() {
    //   filename = this.files[0].name
    //   console.log(filename);
    // });




    //mobile no.
    $(document).ready(function () {
      $('#yourphone').usPhoneFormat({
          format: 'xxx-xxx-xxxx',
      });
     
  })


  

  

     //mobile no. 
    this.reg.what_kind_of_bank="預金種類";
    //show on top screen 
    if(this.firstLoad)
     {
  window.scroll(0,0);
  this.firstLoad = false;
  }


 this.route.queryParamMap.subscribe(data=>{

this.reg.master_sales_code=data.get('rfc');
})
    }

  onRegister(reg){
    
    console.log(reg);
   
    
    if (this.reg.dl_front_img && this.reg.dl_back_img) {
      this.authservice.registration(reg)
.subscribe(data =>{
      
 console.log (data)
 if(data.status == "success")
 {
 
this.router.navigate(['registration-detail'],{queryParams:{kana:this.reg.kana,
  kanji:this.reg.kanji, tel:this.reg.tel, email:this.reg.email, dob:this.reg.dob,
  password:this.reg.password,confirm_password:this.reg.confirm_password, zip_code:this.reg.zip_code,
  address:this.reg.address, 

  dl_front_img:this.reg.dl_front_img, dl_back_img:this.reg.dl_back_img,

  bank_name:this.reg.bank_name,  bank_name_kana:this.reg.bank_name_kana, bank_number:this.reg.bank_number, 
  branch:this.reg.branch, branch_kana:this.reg.branch_kana, branch_code:this.reg.branch_code, what_kind_of_bank:this.reg.what_kind_of_bank, 
  account_number:this.reg.account_number,
  account_holder_name_kana:this.reg.account_holder_name_kana, account_holder_name:this.reg.account_holder_name,
}});

 }
 else{
  this.router.navigate(['register']) 
      }
});
    }
}
  
// W64 for front image
changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  let image;
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    image = myReader.result;
    this.reg.dl_front_img = myReader.result;
    
    // $('#imgfront').attr('src',myReader.result);
    console.log('front image', this.reg.dl_front_img)

  
  }
  
  myReader.readAsDataURL(file);
}

// W64 for Back image
changeListener1($event) : void {
  this.readThis1($event.target);
}

readThis1(inputValue: any): void {
  let image;
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    image = myReader.result;
    this.reg.dl_back_img = myReader.result;
    
    // $('#imgfront').attr('src',myReader.result);
    console.log('back image', this.reg.dl_back_img)

  
  }
  
  myReader.readAsDataURL(file);
}

}

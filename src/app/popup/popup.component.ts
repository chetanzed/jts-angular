import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { Popup } from '../popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() id: number;

  myForm: FormGroup;
  

  constructor( public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private route: Router, private authservice:AuthService) 
  {this.createForm();}

  ngOnInit() {
    
  }

  private createForm() {
    myForm: FormGroup;
    this.myForm = this.formBuilder.group({
      // username: '',
      // password: ''
      unique_sales_code:''

    });
      }
      submitForm() {
        let unique_sales_code = this.myForm.value

    this.createcode(unique_sales_code);
    this.myForm.reset();
        console.log('form has been submitted');
        this.activeModal.close(this.myForm.value);
      }    
      createcode(unique_sales_code: Popup) {
        this.authservice.createcode(unique_sales_code)
        .subscribe(data =>{

          if(data)
      {
  
        localStorage.setItem("isLoggedin","yes");
  this.route.navigate(['register'])
       
  }
      else{
   alert("sorry enter your master code")
      }

     });
  }



   
  
}

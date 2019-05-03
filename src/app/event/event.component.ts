import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilClass } from '../model/utilClass';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent extends utilClass implements OnInit {
  firstLoad: any;
  eventForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0)
      this.firstLoad = false;
    }


    this.eventForm = this.formBuilder.group({
      salonname: ['', Validators.required],
      participantname1: ['', Validators.required],
      participantname2: ['', Validators.required],
      participantname3: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salon_like_address: ['', [Validators.required]]
    });




  }
  // convenience getter for easy access to form fields
  get f() { return this.eventForm.controls; }






  onSubmit() {
  this.submitted = true;
    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }
    console.log(this.eventForm);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

}

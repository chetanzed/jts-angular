import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilClass } from '../model/utilClass';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent extends utilClass implements OnInit {
  firstLoad:boolean=true;
  eventForm: FormGroup;
  submitted = false;
  msg = "";
  public edited = false;
  constructor(private formBuilder: FormBuilder, private EventService: AuthService) {
    super();
  }

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0)
      this.firstLoad = false;
    }


    this.eventForm = this.formBuilder.group({
      salon_name: ['', Validators.required],
      participant_one: ['', Validators.required],
      participant_two: ['', Validators.required],
      participant_three: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]]
    });




  }
  // convenience getter for easy access to form fields
  get f() { return this.eventForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    } else {
      console.log(this.eventForm);
      this.EventService.eventService(this.eventForm.value).subscribe(data => {
        console.log(data);
        this.msg = data.msg ;
      });
      this.eventForm.reset();
        //wait 2 Seconds and hide
        setTimeout(function() {
        //    //show box msg
        this.edited = true;
            console.log(this.edited);
        }.bind(this), 2000);
    }
  }
  
  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

}

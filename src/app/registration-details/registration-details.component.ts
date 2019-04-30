import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterForm } from '../Models/registration.model';
import { AuthService } from '../services/auth.service';

declare var $: any;
@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService, private route: ActivatedRoute) { }
  firstLoad: Boolean = true;
  reg: RegisterForm = new RegisterForm();
  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
    this.route.queryParamMap.subscribe(data => {
      this.reg.kana = data.get('kana');
      this.reg.kanji = data.get('kanji');
      this.reg.tel = data.get('tel');
      this.reg.email = data.get('email');
      this.reg.dob = data.get('dob');
      this.reg.password = data.get('password');
      this.reg.confirm_password = data.get('confirm_password');
      this.reg.zip_code = data.get('zip_code');
      this.reg.address = data.get('address');
      this.reg.dl_front_img = data.get('dl_front_img');
      this.reg.dl_back_img = data.get('dl_back_img');
      this.reg.bank_name = data.get('bank_name');
      this.reg.bank_name_kana = data.get('bank_name_kana');
      this.reg.bank_number = data.get('bank_number');
      this.reg.branch = data.get('branch');
      this.reg.branch_kana = data.get('branch_kana');
      this.reg.branch_code = data.get('branch_code');
      this.reg.what_kind_of_bank = data.get('what_kind_of_bank');
      this.reg.account_number = data.get('account_number');
      this.reg.account_holder_name_kana = data.get('account_holder_name_kana');
      this.reg.account_holder_name = data.get('account_holder_name');
    });
  }
  onSubmit() {

    console.log('helloooe');
    this.authservice.registration(this.reg).subscribe(data => {
      console.log('hello');

      console.log(data);
      console.log('hiiii');
      if (data.status = 'success') {
        this.router.navigate(['thanks']);
      } else {
        this.authservice.registration(this.reg).subscribe(data => {
          alert(data.msg1);
        });
      }
    });
  }

}

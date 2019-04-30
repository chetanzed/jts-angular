import { Component, OnInit, ViewChild, HostListener } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { RegisterForm } from '../Models/registration.model'
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { utilClass } from '../Models/utilClass';
import { from } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends utilClass implements OnInit {
  reg: RegisterForm = new RegisterForm();
  file1default = "未選択";
  file2default = "未選択";
  // tslint:disable-next-line: no-inferrable-types
  firstLoad: boolean = true;
  regForm: FormGroup;
  locale = 'ja';
  locales = listLocales();
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(
    private localeService: BsLocaleService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    super();
    this.datePickerConfig = Object.assign({
      showWeekNumbers: false,
      dateInputFormat: 'YYYY年MM月DD日'
    });
  }
  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
    this.localeService.use(this.locale);
    this.route.queryParamMap.subscribe(data => {
      this.reg.master_sales_code = data.get('unique_sales_code');
    });


    // formvalidation start
    this.regForm = this.fb.group({
      kana: ['', [Validators.required]],
      kanji: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required]],
      passwordMatch: this.fb.group({
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]]
      }, { validator: this.passwordMatch }),

      dob: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      address: ['', [Validators.required]],
      dl_front_img: ['', [Validators.required]],
      dl_back_img: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
      bank_name_kana: ['', [Validators.required]],
      bank_number: ['', [Validators.required]],
      branch_code: ['', [Validators.required]],
      branch_kana: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      what_kind_of_bank: ['預金種類', [Validators.required]],
      account_number: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      account_holder_name_kana: ['', [Validators.required]],
      account_holder_name: ['', [Validators.required]]
    });
    // formvalidation finish
  }

  //=============Password matching start=========//
  passwordMatch(control: AbstractControl): { [key: string]: any } | null {
    var password = control.get('password');
    var confirm_password = control.get('confirm_password');

    if (password.value == confirm_password.value) {
      return null;
    } else {
      return { passwordMatch: true };
    }
  }
  //=======Password matching end=============//

  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  goSubmit() {
    console.log(this.regForm)
    this.router.navigate(['registration-detail'], {
      queryParams: {
        kana: this.regForm.get('kana').value,
        kanji: this.regForm.get('kanji').value,
        tel: this.regForm.get('tel').value,
        email: this.regForm.get('email').value,
        password: this.regForm.get('passwordMatch').get('password').value,
        confirm_password: this.regForm.get('passwordMatch').get('confirm_password').value,
        dob: this.regForm.get('dob').value,
        zip_code: this.regForm.get('zip_code').value,
        address: this.regForm.get('address').value,
        dl_front_img: this.reg.dl_front_img,
        dl_back_img: this.reg.dl_back_img,
        bank_name: this.regForm.get('bank_name').value,
        bank_name_kana: this.regForm.get('bank_name_kana').value,
        bank_number: this.regForm.get('bank_number').value,
        branch: this.regForm.get('branch').value,
        branch_kana: this.regForm.get('branch_kana').value,
        branch_code: this.regForm.get('branch_code').value,
        what_kind_of_bank: this.regForm.get('what_kind_of_bank').value,
        account_number: this.regForm.get('account_number').value,
        account_holder_name_kana: this.regForm.get('account_holder_name_kana').value,
        account_holder_name: this.regForm.get('account_holder_name').value
      }
    });
  }

  // W64 for front image
  changeListener($event): void {
    console.log($event);
    let filename = $event.target.value;
    filename = filename.split('\\');
    filename = filename[filename.length - 1];
    console.log(filename);
    this.file1default = filename;
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    console.log(inputValue);
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = e => {
      this.reg.dl_front_img = myReader.result;
      console.log(myReader);
      console.log('front image', this.reg.dl_front_img);
    };
    myReader.readAsDataURL(file);
  }
  // W64 for Back image
  changeListener1($event): void {
    console.log($event);
    let filename1 = $event.target.value;
    filename1 = filename1.split('\\');
    filename1 = filename1[filename1.length - 1];
    console.log(filename1);
    this.file2default = filename1;
    this.readThis1($event.target);
  }

  readThis1(inputValue: any): void {
    let image;
    console.log(inputValue);
    var file: File = inputValue.files[0]
    var myReader: FileReader = new FileReader();
    myReader.onloadend = e => {
      image = myReader.result;
      this.reg.dl_back_img = myReader.result;
      console.log(myReader);
      console.log('back image', this.reg.dl_back_img);
    };
    myReader.readAsDataURL(file);
  }
}





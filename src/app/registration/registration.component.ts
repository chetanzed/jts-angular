import { Component, OnInit,ViewChild,HostListener } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../auth.service'
import { RegisterForm } from '../registration.model'
import { BsLocaleService, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
declare var $: any
import { from } from 'rxjs'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
  locale : 'ja';
  frontImage: string
  backImage: string
  what_kind_of_back: string
  reg: RegisterForm = new RegisterForm()
  realInput2:any;
  constructor(
    private router: Router,
    private authservice: AuthService,
    private route: ActivatedRoute,
    private localeService: BsLocaleService
  ) {}

  rform: RegisterForm = new RegisterForm()
  firstLoad: boolean = true

  // @HostListener('window:scroll')
  // onScrollEvent() {
  //   this.datepicker.hide();
  // }
 
  ngOnInit() {
    this.localeService.use(this.locale);

   
    // $("#files").change(function() {
    //   filename = this.files[0].name
    //   console.log(filename);
    // });
    // $(document).ready(function() {
    //   $('#dob').datepicker({
    //     format: 'yyyy/mm/dd',
    //     autoclose: true
    //   })
    // })
    const uploadButton = document.querySelector('.browse-btn')
    const fileInfo = document.querySelector('.file-info')
    const realInput = (<HTMLInputElement>document.getElementById('real-input'))
   
    uploadButton.addEventListener('click', e => {
      realInput.click()
    })

    realInput.addEventListener('change', () => {
      const name = realInput.value.split(/\\|\//).pop();
      const truncated = name.length > 20
        ? name.substr(name.length - 20)
        : name;

      fileInfo.innerHTML = truncated;
    });

   

    const uploadButton1 = document.querySelector('.browse-btn1')
    const fileInfo1 = document.querySelector('.file-info1')
    const realInput1 = (<HTMLInputElement>document.getElementById('real-input1'))
   
    uploadButton1.addEventListener('click', e => {
      realInput1.click()
    })

    realInput1.addEventListener('change', () => {
      const name = realInput1.value.split(/\\|\//).pop();
      const truncated = name.length > 20
        ? name.substr(name.length - 20)
        : name;

      fileInfo1.innerHTML = truncated;
    });






    //mobile no.
    $(document).ready(function() {
      $('#yourphone').usPhoneFormat({
        format: 'xxx-xxx-xxxx'
      })

      $('#yourphone1').usPhoneFormat({
        format: 'xxxx'
      })

      $('#yourphone2').usPhoneFormat({
        format: 'xxx'
      })

      $('#yourphone3').usPhoneFormat({
        format: 'xxxxxxxx'
      })
    })

    //mobile no.
    this.reg.what_kind_of_bank = '預金種類'
    //show on top screen
    if (this.firstLoad) {
      window.scroll(0, 0)
      this.firstLoad = false
    }

    this.route.queryParamMap.subscribe(data => {
      this.reg.master_sales_code = data.get('rfc')
    })
    
  }

  onRegister(reg) {
    console.log(reg)

    if (this.reg.dl_front_img && this.reg.dl_back_img) {
      this.authservice.registration(reg).subscribe(data => {
        console.log(data)
        if (data.status == 'success') {
          this.router.navigate(['registration-detail'], {
            queryParams: {
              kana: this.reg.kana,
              kanji: this.reg.kanji,
              tel: this.reg.tel,
              email: this.reg.email,
              dob: this.reg.dob,
              password: this.reg.password,
              confirm_password: this.reg.confirm_password,
              zip_code: this.reg.zip_code,
              address: this.reg.address,

              dl_front_img: this.reg.dl_front_img,
              dl_back_img: this.reg.dl_back_img,

              bank_name: this.reg.bank_name,
              bank_name_kana: this.reg.bank_name_kana,
              bank_number: this.reg.bank_number,
              branch: this.reg.branch,
              branch_kana: this.reg.branch_kana,
              branch_code: this.reg.branch_code,
              what_kind_of_bank: this.reg.what_kind_of_bank,
              account_number: this.reg.account_number,
              account_holder_name_kana: this.reg.account_holder_name_kana,
              account_holder_name: this.reg.account_holder_name
            }
          })
        } else {
          this.router.navigate(['register'])
        }
      })
    }
  }

  // W64 for front image
  changeListener($event): void {
    this.readThis($event.target)
  }

  readThis(inputValue: any): void {
    let image
    var file: File = inputValue.files[0]
    var myReader: FileReader = new FileReader()

    myReader.onloadend = e => {
      image = myReader.result
      this.reg.dl_front_img = myReader.result

      // $('#imgfront').attr('src',myReader.result);
      console.log('front image', this.reg.dl_front_img)
    }

    myReader.readAsDataURL(file)
  }

  // W64 for Back image
  changeListener1($event): void {
    this.readThis1($event.target)
  }

  readThis1(inputValue: any): void {
    let image
    var file: File = inputValue.files[0]
    var myReader: FileReader = new FileReader()

    myReader.onloadend = e => {
      image = myReader.result
      this.reg.dl_back_img = myReader.result

      // $('#imgfront').attr('src',myReader.result);
      console.log('back image', this.reg.dl_back_img)
    }

    myReader.readAsDataURL(file)
  }

  dateChange(date: any): void {
    this.reg.dob = date
  }
  
}

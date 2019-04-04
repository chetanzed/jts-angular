import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openPopup(){
    const modalRef = this.modalService.open(PopupComponent);

    modalRef.componentInstance.id = 10;

    modalRef.result.then((result) => {
      console.log('form result >>');
      console.log(result);
    }).catch((error) => {
      console.log('from error >>');
      console.log(error);
    });
}
  }

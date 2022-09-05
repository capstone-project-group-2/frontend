import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  username = '';
  street1 = '';
  street2 = '';
  area1 = '';
  area2 = '';
  pincode = '';
  email = '';
  date = '';
  status = '';
  totalprice = '';
  paymentid = '';


  constructor(private pay: PayService) { }

  ngOnInit(): void {
    this.username = this.pay.username;
    this.street1 = this.pay.street1;
    this.street2 = this.pay.street2;
    this.area1 = this.pay.area1;
    this.area2 = this.pay.area2;
    this.pincode = this.pay.pincode;
    this.email = this.pay.email;
    this.date = this.pay.date;
    this.status = this.pay.status;
    this.totalprice = this.pay.totalprice;
    this.paymentid = this.pay.paymentid;
  }




}

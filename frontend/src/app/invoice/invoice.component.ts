import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PayService } from '../pay.service';
import { UserService } from '../user.service';

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
  productdetails:any;
  invoicetot:any;
  invoicequt:any='';
  invoiceprice:any='';
  invoicename:any='';
  invoicedata:any=[];

  public product:any=[];
  constructor(private pay: PayService,private cart:CartService,private user:UserService) { }

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

    // this.cart.getData()
    // .subscribe(res=>{
    //   this.product=res;
    // })
    this.invoicedata=this.user.invoicedata;
    this.invoicedata=this.cart.invoicedata;
    
   
   
   
   
  //   console.log(this.cart.invoiceTot)
  //   console.log(this.invoicetot);
    
   this.invoicetot=this.cart.invoiceTot;
  //  console.log(this.invoicetot);
   
  //  this.invoicename=this.cart.invoicename;
  //  this.invoiceprice=this.cart.invoiceprice;
   this.invoicequt=this.cart.invoiceQnty;


  //  this.invoicetot=this.user.invoiceTot;
  //  this.invoicename=this.user.invoicename;
  //  this.invoiceprice=this.user.invoiceprice;
  //  this.invoicequt=this.user.invoiceQnty;

   
  }




}

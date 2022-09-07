import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments'
import { PayService } from '../pay.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  userDetails: any;

  constructor(private router: Router, private pay: PayService) { }

  ngOnInit(): void {
    render(
      {
        id: "#buttons",
        currency: "USD",
        value: "1000",
        onApprove:(details:any) => {
          console.log("details",details);
          // alert("success")
          this.userDetails = details;
          this.router.navigateByUrl("/invoice")
          this.pay.username = details.purchase_units[0].shipping.name.full_name;
          console.log("name", this.pay.username);

          this.pay.street1 = details.purchase_units[0].shipping.address.address_line_1;
          this.pay.street2 = details.purchase_units[0].shipping.address.address_line_2;
          this.pay.area1 = details.purchase_units[0].shipping.address.admin_area_1;
          this.pay.area2 = details.purchase_units[0].shipping.address.admin_area_2;
          this.pay.pincode = details.purchase_units[0].shipping.address.postal_code;
          this.pay.email = details.payer.email_address;
          this.pay.totalprice = details.purchase_units[0].payments.captures[0].amount.value;
          this.pay.paymentid = details.purchase_units[0].payments.captures[0].id;
          this.pay.status = details.status;
          this.pay.date = details.create_time;
          console.log("total", this.pay.paymentid);
          console.log("purchase", this.pay.street1);
        }
      }
    )
  }
}

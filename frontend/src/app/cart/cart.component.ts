import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity:any;
  products:any=[];
  allproducts:any=0;
  total:any;
  alltotal:any=0;
  name:any;
  price:any;
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getData().subscribe((res)=>{
      this.products=res;
      this.allproducts=this.cs.totalAmount();
      this.cs.invoicedata=this.products;
      //
      // this.cs.invoiceQnty=this.quantity;
      // this.cs.invoicename=this.name;
      // this.cs.invoiceprice=this.price;
    })
  }

  remove(item:any){
     this.cs.removeData(item);
     alert("removed")
  }

  change(i:any){
    console.log(this.quantity)
   this.total= this.products[i].price*this.quantity
   console.log(this.total);
   this.alltotal=this.alltotal+this.total
   console.log(this.alltotal)
   this.cs.invoiceTot=this.alltotal;
   this.cs.invoiceQnty=this.quantity;
  }

  



}

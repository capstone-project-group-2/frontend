import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  allproducts:any=0;

  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getData().subscribe((res)=>{
      this.products=res;
      this.allproducts=this.cs.totalAmount();
    })
  }

  remove(item:any){
     this.cs.removeData(item);
     alert("removed")
  }



}

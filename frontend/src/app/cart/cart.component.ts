import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!:Cart

  constructor(private cs:CartService,private router:Router) { 
    this.setCart();
  }

  

  ngOnInit(): void {
    this.setCart();
  }

  setCart(){
    this.cart = this.cs.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cs.removeFromCart(cartItem.product.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cs.changeQuantity(cartItem.product.id,quantity);
    this.setCart
  }

  click(){
    this.router.navigateByUrl("/payment")
  }

}

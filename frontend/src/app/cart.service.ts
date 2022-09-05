import { Injectable } from '@angular/core';
import { Cart } from './model/cart';
import { CartItem } from './model/cartItems';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  constructor() { }

  addToCart(product:Product):void{
    let cartItem = this.cart.items.find(item => item.product.id == product.id)
    if(cartItem){
      this.changeQuantity(product.id,cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(product));
  }


  removeFromCart(productId:number){
    this.cart.items = this.cart.items.filter(item => item.product.id != productId)
  }


  changeQuantity(quantity:number,foodId:number){
    let cartItem = this.cart.items.find(item => item.product.id === foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }


}

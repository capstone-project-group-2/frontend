import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './model/cart';
import { CartItem } from './model/cartItems';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData:any=[];
  productData=new BehaviorSubject<any>([]);

  // private cart:Cart = new Cart();

  constructor() { }

  addToCart(product:any){
      this.cartData.push(product)
      this.productData.next(this.cartData)
      this.totalAmount()
  }

  getData(){
    return this.productData.asObservable()
  }

  setData(product:any){
    this.cartData.push(...product)
    this.productData.next(product)
  }

  totalAmount(){
    let total = 0;
    this.cartData.map((a:any)=>{
      total+=a.price;
    })
  }

  removeData(product:any){
    this.cartData.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartData.splice(index,1)
      }
    })
  }

  // addToCart(product:Product):void{
  //   let cartItem = this.cart.items.find(item => item.product.id == product.id)
  //   if(cartItem){
  //     this.changeQuantity(product.id,cartItem.quantity+1)
  //     return;
  //   }
  //   this.cart.items.push(new CartItem(product));
  // }


  // removeFromCart(productId:number){
  //   this.cart.items = this.cart.items.filter(item => item.product.id != productId)
  // }


  // changeQuantity(quantity:number,foodId:number){
  //   let cartItem = this.cart.items.find(item => item.product.id === foodId)
  //   if(!cartItem) return;
  //   cartItem.quantity = quantity;
  // }

  // getCart():Cart{
  //   return this.cart;
  // }


}

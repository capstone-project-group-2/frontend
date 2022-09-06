import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './model/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  public Wishitemlist: any=[]
  public productlist = new BehaviorSubject<any>([]);



  constructor(private ds:UserService) { }
  getproducts(){
    return this.productlist.asObservable(); 
   }
   setproducts(product :any){
    this.Wishitemlist.push(...product);
    this.productlist.next(product);
  } 
  addtowishlist(product :any){
    this.Wishitemlist.push(product);
    this.productlist.next(this.Wishitemlist);
    // this.gettotalprice();
    console.log(this.Wishitemlist);
    
  }
   removewishitem(product:any){
    this.Wishitemlist.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.Wishitemlist.splice(index,1);
      }
    })
    this.productlist.next(this.Wishitemlist);
  }

}
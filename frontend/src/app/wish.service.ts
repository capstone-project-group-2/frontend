import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './model/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WishService {


  constructor(private ds:UserService) { }
  getWishList(){

  }
  addToWishlist(){

  }
  removeFromWishlist(){

  }

}
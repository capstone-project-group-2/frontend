import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from '../model/product';
import { UserService } from '../user.service';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  // product!:Product
  public product:any=[];



  constructor(private ds:UserService,private router:Router,private wishlist:WishService,private route:ActivatedRoute ) {}
    // route.params.subscribe((params)=>{
    //   this.product=ds.getProductById(params['id'])
    // })

  
   



  ngOnInit(): void {
    this.wishlist.getproducts()
    .subscribe(res=>{
      this.product = res;

    // this.grandtotal = this.cart2.gettotalprice();
    })
  }

  removeWishListItem(item:any){
    this.wishlist.removewishitem(item);
  }
  }


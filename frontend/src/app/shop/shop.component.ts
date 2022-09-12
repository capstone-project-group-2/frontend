import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../model/product';
import { UserService } from '../user.service';
import { WishService } from '../wish.service';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // product:Product[]=[]
  product:any=[];
  constructor(private ds:UserService,private route:ActivatedRoute,private router:Router,private wish:WishService,private cs:CartService) { }

  ngOnInit(): void {
    this.ds.getData().subscribe(res=>{
      console.log("res",res);
      this.product=res;
      console.log("shop",this.product);
    })

    // this.alldata = this.ds.getData()
    //  console.log(this.alldata);
       
    // this.route.params.subscribe(params=>{
    //   if(params['searchItem'])
    //   this.product = this.ds.database().filter(product=>product.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    //   else if(params['category'])
    //   this.product = this.ds.getCategory(params['category'])
    //   else
    //   this.product = this.ds.database();
    // })


  }
  addtowishlist(item:any){
    this.wish.addtowishlist(item);

  }

  addToCart(item:any){
     this.cs.addToCart(item)
    //  this.router.navigateByUrl("/cart")
  }

view(item:any){
  this.cs.getViewData(item)
  this.router.navigateByUrl("/view")
}

}

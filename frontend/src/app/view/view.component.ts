import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../model/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product!:Product

  constructor(private router:Router,private ds:UserService,private route: ActivatedRoute,private cs:CartService) { 
    route.params.subscribe((params)=>{
      this.product = ds.getProductById(params['id'])
    })
  }

  ngOnInit(): void {
  }

  cart(){
    this.cs.addToCart(this.product)
    this.router.navigateByUrl('/cart')
  }


}

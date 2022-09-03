import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product:Product[]=[]

  constructor(private ds:UserService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {

    // this.alldata = this.ds.getData()
    //  console.log(this.alldata);
       
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.product = this.ds.database().filter(product=>product.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['category'])
      this.product = this.ds.getCategory(params['category'])
      else
      this.product = this.ds.database();
    })


  }



}

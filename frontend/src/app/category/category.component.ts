import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { UserService } from '../user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()


  itemCategory?:string[];
  category?:Category[]=[];


  // constructor(private ds:UserService) { }
  constructor(private ds:UserService) {}

  ngOnInit(): void {
    if(!this.itemCategory)
    this.category= this.ds.getAllCategory()
    console.log("category",this.category);
    
  }

}

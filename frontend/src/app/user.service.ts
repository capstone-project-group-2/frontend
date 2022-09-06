import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './model/category';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getProductById(id:number):Product{
    return this.database().find(element => element.id == id)!;
  }

getData(){
 return<any>(this.database)
}

getCategory(category:string):Product[]{
  return category == "all" ? this.database():this.database().filter(item=>item.categories?.includes(category))
}

getAllCategory(): Category[]{
  return [
    {name:'All',image:"../../assets/regimg.webp"},
    {name:'Food',image:"../../assets/regimg.webp"},
    {name:'Grocery',image:"../../assets/regimg.webp"},
    {name:'Household',image:"../../assets/regimg.webp"},
    {name:'Health',image:"../../assets/regimg.webp"},
  ]
}


 database():Product[]{
 return [
    {id:1,name:"Chips",categories:["All","Food"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Pickle",categories:["All","Food"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Soap",categories:["All","Grocery"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Handwash",categories:["All","Grocery"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Mat",categories:["All","Household"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Candle",categories:["All","Household"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Sanitizer",categories:["All","Health"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"Mask",categories:["All","Health"],description:"good",price:200,image:"../../assets/regimg.webp"}
   ]
  
 }
 
}

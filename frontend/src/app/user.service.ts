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
    {name:'all',image:"../../assets/regimg.webp"},
    {name:'food',image:"../../assets/regimg.webp"},
    {name:'grocery',image:"../../assets/regimg.webp"},
    {name:'household',image:"../../assets/regimg.webp"},
    {name:'health',image:"../../assets/regimg.webp"},
  ]
}


 database():Product[]{
 return [
    {id:1,name:"chips",categories:["all","food"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"pickle",categories:["all","food"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"soap",categories:["all","grocery"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"handwash",categories:["all","grocery"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"mat",categories:["all","household"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"candle",categories:["all","household"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"sanitizer",categories:["all","health"],description:"good",price:200,image:"../../assets/regimg.webp"},
    {id:1,name:"mask",categories:["all","health"],description:"good",price:200,image:"../../assets/regimg.webp"}
   ]
  
 }
 
}
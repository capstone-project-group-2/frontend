import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './model/category';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invoicedata:any=[];
  invoiceTot=''
  invoiceQnty=''
  invoiceprice=''
  invoicename=''

  constructor(private http:HttpClient) { }

  getProductById(id:number):Product{
    return this.database().find(element => element.id == id)!;
  }

getData(){
 return this.http.get<any>('https://febinmicheal.pythonanywhere.com/product/product/')
}

getCat(){
 return this.http.get<any>('https://four-clowns-occur-202-164-133-86.loca.lt/product/category/')

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


 submit(username:any,email:any,password:any){

  const data={
      username,
      email,
      password
    }

  return this.http.post('https://ninety-ends-begin-103-165-20-21.loca.lt/account/register/',data)
 }


login(username:any,password:any){

const data={
  username,
  password
}

return  this.http.post('https://ninety-ends-begin-103-165-20-21.loca.lt/account/login/',data);

}

getlogindata(){
  return this.http.get<any>('https://ninety-ends-begin-103-165-20-21.loca.lt/account/login/')

}

 
}

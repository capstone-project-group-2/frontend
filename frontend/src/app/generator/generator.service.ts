import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http:HttpClient) { }

getProduct(){
  return this.http.get('https://febinmicheal.pythonanywhere.com/product/product/')
}

getUser(){
  return this.http.get<any>('https://febinmicheal.pythonanywhere.com/account/list/')
}

getCat(){
  return this.http.get<any>('https://febinmicheal.pythonanywhere.com/product/category/')
}

login(username:any,password:any){

 const data={
    username,
    password
  }

  return this.http.post('https://febinmicheal.pythonanywhere.com/account/report/login/',data)
}

}

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

}

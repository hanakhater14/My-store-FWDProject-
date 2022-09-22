import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {
clickedProduct:product;
  constructor(private http: HttpClient) { 
    this.clickedProduct={
      id:0,
      name:"",
      price:0,
      url:"",
      description:"",
      quantity:0
    }
  }

  GetAllProducts(){
  return this.http.get<product[]>('https://api.npoint.io/21451db83c580741013a');
  //return this.http.get<product[]>('.\src\assets\data.json');
  }
  setClickedProduct(product:product){
   this.clickedProduct=product
  }
  getClickedProduct(){
  return this.clickedProduct;
  }
}

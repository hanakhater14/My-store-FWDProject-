import { Injectable } from '@angular/core';
import { product } from 'src/models/product';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
CartItems:product[]=[];
CartItems1:product[]=[];
  constructor() {
    this.CartItems1=this.CartItems
   }

  addProductToCart(product: product){
  let quantity=0;
  let found=false;
  const index = this.CartItems.findIndex(x => x.id ===product.id);
  if(index > -1){
  console.log(this.CartItems[index].quantity);
  quantity=Number(this.CartItems[index].quantity)+Number(product.quantity); 
  this.CartItems[index].quantity=quantity;
  found=true;
  }
  if(found==false){
  this.CartItems.push(product); 
  }

  /*let found=false;
  let quantity=0;
  for(let i =0;i<this.CartItems.length;i++) {
    console.log("in");
    if(this.CartItems[i].id===product.id){
     // console.log("befor"+this.CartItems[i].quantity,product.quantity);
      quantity=Number(this.CartItems[i].quantity)+Number(product.quantity);
      this.CartItems[i].quantity=quantity;
      console.log("after"+this.CartItems[i].quantity);
      found=true;
      break;
    }
  } 
  if(found==false){
  this.CartItems.push(product);
  console.log("new"+product.quantity);
  */ 
  }

  getCartItems(){
    return this.CartItems;
  }
  emptyCart(){
    this.CartItems=[];
  }
  removeProduct(product:product){
   const index = this.CartItems.indexOf(product, 0);
   if (index > -1) {
     this.CartItems.splice(index, 1);
    }
  }
}

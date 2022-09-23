import { Injectable } from '@angular/core';
import { product } from 'src/models/product';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  CartItems: product[] = [];
  constructor() {
  }

  addProductToCart(product: product,addedQuantity:number) {
    console.log("inside add prod to cart "); console.log(product);
    console.log("cart items:"); console.log(this.CartItems);
    let quantity = 0;
    let found = false;
    const index = this.CartItems.findIndex(x => x.id === product.id);
    if (index > -1) {
      console.log("item in cart ");
      console.log("product.quantity= "+product.quantity);
      console.log("this.CartItems[index].quantity= "+this.CartItems[index].quantity);
      quantity = Number(this.CartItems[index].quantity) + Number(addedQuantity);
      console.log("new quantity="+quantity);
      this.CartItems[index].quantity = quantity;
      found = true;
    }
    if (found == false) {
      product.quantity=addedQuantity;
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

  getCartItems() {
    return this.CartItems;
  }
  emptyCart() {
    this.CartItems = [];
  }
  removeProduct(product: product) {
    const index = this.CartItems.indexOf(product, 0);
    if (index > -1) {
      this.CartItems.splice(index, 1);
    }
  }
}

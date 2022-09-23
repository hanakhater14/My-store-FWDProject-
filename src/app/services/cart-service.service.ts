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
    let quantity = 0;
    let found = false;
    const index = this.CartItems.findIndex(x => x.id === product.id);
    if (index > -1) {
      quantity = Number(this.CartItems[index].quantity) + Number(addedQuantity);
      this.CartItems[index].quantity = quantity;
      found = true;
    }
    if (found == false) {
      product.quantity=addedQuantity;
      this.CartItems.push(product);
    }
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

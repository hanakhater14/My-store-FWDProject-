import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { product } from 'src/models/product';
import { user } from 'src/models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: product[] = [];
  totalPrice: number = 0;
  fullName: string = '';
  address: string = '';
  user: user;
  credit: string = '';


  constructor(private cartService: CartServiceService, private userService: UserserviceService, private router: Router) {
    this.user = {
      fullName: "",
      totalCartPrice: 0
    }
    
  }
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += Number((this.cartItems[i].quantity * this.cartItems[i].price).toFixed(3));
    }
  }
  quantityChange(product:product,quantity:number){
    console.log("enter");
    this.cartService.newCartQunatity(product,quantity);
    console.log(this.cartItems);
    this.totalPrice=0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += Number((this.cartItems[i].quantity * this.cartItems[i].price).toFixed(3));
    }
  }
  onSubmit() {
    this.user.fullName = this.fullName;
    this.user.totalCartPrice = this.totalPrice;
    this.userService.setUserData(this.user);
    this.cartItems = [];
    this.cartService.emptyCart();
    this.router.navigate(['/confirmation']);
  }
  removeProduct(product: product) {
    this.cartService.removeProduct(product);
    if (this.cartItems.length == 0) {
      this.totalPrice = 0;
      this.user.totalCartPrice = 0;
    }
    else {
      this.totalPrice -= product.price * product.quantity;
      this.user.totalCartPrice = this.totalPrice;
    }
    alert(product.name +" is removed from cart")
  }
}

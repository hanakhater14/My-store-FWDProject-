import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/models/product';
import { CartServiceService } from '../services/cart-service.service';
import { ProductHTTPService } from '../services/product-http.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: product;
  @Output() favoritProduct = new EventEmitter();
  quantity =1;

  constructor(private CartService: CartServiceService, private productService: ProductHTTPService) {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: "",
      quantity: 0
    }
  }

  ngOnInit(): void {
  }
  onChange(quantity:string) {
    console.log(quantity);
    this.quantity=Number(quantity);
  }
  addtocart(product: product) {
    this.CartService.addProductToCart(product,this.quantity);
    alert("Added to cart!")
    console.log(this.CartService.getCartItems());
    console.log(product);
  }
  setClickedProduct(product: product) {
    this.productService.setClickedProduct(product)
  }
}

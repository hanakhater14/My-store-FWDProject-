import { Component, OnInit } from '@angular/core';
import { ProductHTTPService } from '../services/product-http.service';
import { CartServiceService } from '../services/cart-service.service';
import { product } from 'src/models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: product;
  quantity = 1;
  constructor(private productService: ProductHTTPService, private cartService: CartServiceService) {
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
    this.product = this.productService.getClickedProduct();
  }
  addtocart(product: product) {
    this.cartService.addProductToCart(product, this.quantity);
    alert("Added to cart!")
  }

}

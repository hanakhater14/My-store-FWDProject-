import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductHTTPService } from '../services/product-http.service';
import { product } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:product[]=[];
  constructor(private ProductService:ProductHTTPService,private http: HttpClient) { }

  ngOnInit(): void {
    this.ProductService.GetAllProducts().subscribe(data=>{
      this.products=data;
    })
  }
  addToFavorit(product:product){
   product.favorit=true;
   alert("added to favorites")
  }
}

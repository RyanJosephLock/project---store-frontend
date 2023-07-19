import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) =>  {
      this.products = data;
    });
  }

}

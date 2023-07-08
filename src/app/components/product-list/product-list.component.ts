import { Component } from '@angular/core';

import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  // inject dependency of productService in constructor function. Seperate multiple injected dependencies with commmas.
  constructor(private productService: ProductService) { }

  // initialise component with data
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}

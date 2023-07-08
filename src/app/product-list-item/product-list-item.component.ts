import { Component, Input } from '@angular/core';

import { Product } from '../models/products';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {

  // Input the products from the parent component
  @Input() product: Product;

  constructor(public shoppingCartService: ShoppingCartService, public productService: ProductService) {
    // Initialize product properties
    this.product = {
      id: 0,
      category: '',
      name: '',
      description: '',
      price: 0,
      discount: 0,
      image: '',
    }
  }

}

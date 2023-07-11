import { Component, Input } from '@angular/core';

import { Product } from '../../models/products'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout-cart-item',
  templateUrl: 'checkout-cart-item.component.html',
  styleUrls: ['checkout-cart-item.component.css']
})
export class CheckoutCartItemComponent {

  @Input() product: Product;

  constructor(public productService: ProductService) {
        // Initialize product properties
        this.product = {
          id: 0,
          category: '',
          name: '',
          description: '',
          price: 0,
          discount: 0,
          image: '',
          quantity: 0
        }
  }

}

import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: 'checkout-cart.component.html',
  styleUrls: ['checkout-cart.component.css']
})
export class CheckoutCartComponent {

  products: Product[] = [{
    id: 0,
    category: '',
    name: '',
    description: '',
    price: 0,
    discount: 0,
    image: '',
  }];

  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService){ }

  ngOnInit(): void {
    
  }

}

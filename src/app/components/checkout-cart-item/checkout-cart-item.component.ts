import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../../models/products'
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-cart-item',
  templateUrl: 'checkout-cart-item.component.html',
  styleUrls: ['checkout-cart-item.component.css']
})
export class CheckoutCartItemComponent {

  @Input() product: Product;
  @Output() refreshCheckout: EventEmitter<Product> = new EventEmitter;

  iconTrash = faTrash;
  productTotalPrice: number = 10;

  constructor(public productService: ProductService, public shoppingCartService: ShoppingCartService) {
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

  ngOnInit() {
    if(this.product.quantity) { 
      this.productTotalPrice = this.productService.getSellPrice(this.product) * this.product.quantity 
    }
  }

  updateCartItem(product: Product, $event: number): void {
    this.shoppingCartService.overrideCart(product, $event);
    this.refreshCheckout.emit(product)
  }
  
  removeFromCart(product: Product) {
    this.shoppingCartService.removeFromCart(product)
    this.refreshCheckout.emit(product);
  }

}

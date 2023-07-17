import { Component } from '@angular/core';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/products';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: 'checkout-cart.component.html',
  styleUrls: ['checkout-cart.component.css']
})

export class CheckoutCartComponent {

  iconArrow = faArrowLeft;

  constructor(private shoppingCartService: ShoppingCartService){ }

  checkoutProducts: Product[] = this.shoppingCartService.getCheckoutProducts()
  checkoutTotalPrice: number = this.shoppingCartService.getCheckoutTotalPrice()

  refreshCheckout(product: Product): void {
    this.checkoutProducts = this.shoppingCartService.getCheckoutProducts()
    this.checkoutTotalPrice = this.shoppingCartService.getCheckoutTotalPrice()
  }

}

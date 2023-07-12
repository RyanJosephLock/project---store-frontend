import { Component } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: 'checkout-form.component.html',
  styleUrls: ['checkout-form.component.css']
})
export class CheckoutFormComponent {

  fullname: string = '';
  address: string = '';
  card: string = '';
  checkoutTotalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService){ }

  ngOnInit(): void {
    this.checkoutTotalPrice = this.shoppingCartService.getCheckoutTotalPrice();
  }

  submitForm(): void {
    const user = {
      fullname: this.fullname,
      address: this.address,
      card: this.card
    }

    // TBC action on form submit

    this.fullname='';
    this.address='';
    this.card='';

  }

}
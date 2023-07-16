import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/users';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { UserService } from '../../services/user.service'

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

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private userService: UserService){ }

  ngOnInit(): void {
    this.checkoutTotalPrice = this.shoppingCartService.getCheckoutTotalPrice();
  }

  submitForm(): void {
    const user: User = {
      fullname: this.fullname,
      address: this.address,
    }
    this.userService.setCheckoutUser(user);
    this.router.navigate(['/','thankyou']);
  }

}
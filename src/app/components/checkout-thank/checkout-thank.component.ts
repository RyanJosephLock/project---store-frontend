import { Component } from '@angular/core';

import { User } from '../../models/users';
import { UserService } from '../../services/user.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-thank',
  templateUrl: 'checkout-thank.component.html',
  styleUrls: ['checkout-thank.component.css']
})

export class CheckoutThankComponent {

  constructor(private userService: UserService, private shoppingCartService: ShoppingCartService){ }

  checkoutTotalPrice: number = this.shoppingCartService.getCheckoutTotalPrice()
  checkoutUser: User = this.userService.getCheckoutUser()

}

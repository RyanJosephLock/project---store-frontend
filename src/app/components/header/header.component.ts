import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  iconShoppingCart = faShoppingCart;
  
  constructor(public shoppingCartService: ShoppingCartService) { }

}

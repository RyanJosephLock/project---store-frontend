import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { ProductService } from '../../services/product.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-info',
  templateUrl: 'product-info.component.html',
  styleUrls: ['product-info.component.css']
})
export class ProductInfoComponent {

  product: Product = {
    id: 0,
    category: '',
    name: '',
    description: '',
    price: 0,
    discount: 0,
    image: '',
  };

  routeProductId: number = 0;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, public productService: ProductService, public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.routeProductId = Number(this.route.snapshot.paramMap.get('id'));
    const returnProduct = this.productService.getSingleProduct(this.routeProductId);
    if (returnProduct) { this.product = returnProduct };
  }

  submitForm(): void {
    this.shoppingCartService.addToCart(this.product, this.quantity)
  }

}

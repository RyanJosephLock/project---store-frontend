import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { CartProduct } from '../models/products';
import { WishlistProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartMap = new Map<number,number>();
  wishlistMap = new Map<number, boolean>();

  constructor() { }

  addToCart(product: Product): void {    
    this.cartMap.set(product.id, (this.cartMap.get(product.id) ?? 0) + 1)
    alert(`${product.name} added to cart!`);
  }

  addToWishlist(product: Product): void {
    this.wishlistMap.set(product.id, true)
    alert(`${product.name} added to wishlist!`)
  }

  removeFromWishlist(product: Product): void {
    this.wishlistMap.delete(product.id)
    alert(`${product.name} removed from wishlist!`)
  }

}
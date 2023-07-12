import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartMap = new Map<number,number>();
  wishlistMap = new Map<number, boolean>();
  cartQuantity: number = 0;

  constructor(private productService: ProductService) { }

  addToCart(product: Product, quantity: number): void {    
    this.cartMap.set(product.id, (this.cartMap.get(product.id) ?? 0) + quantity)
    this.refreshCartQuantity();
    alert(`${product.name} added to cart!`);
  }

  removeFromCart(product: Product): void {
    this.cartMap.delete(product.id);
    alert(`${product.name} removed to cart!`);
  }
  
  addToWishlist(product: Product): void {
    this.wishlistMap.set(product.id, true)
    alert(`${product.name} added to wishlist!`)
  }

  removeFromWishlist(product: Product): void {
    this.wishlistMap.delete(product.id)
    alert(`${product.name} removed from wishlist!`)
  }

  refreshCartQuantity(): void {
    this.cartQuantity = 0;
    for (let quantity of this.cartMap.values()) {
      this.cartQuantity += quantity;
    }
    console.log(this.cartQuantity);
  }

  getCheckoutProducts(): Product[] {
    const checkoutProducts: Product[] = [];
    const allProducts: Product[] = this.productService.getProducts();
    for (const [productId, productQuantity] of this.cartMap.entries()) {
      const product = allProducts.find((product) => product.id === productId)
      if (product) {
        product.quantity = productQuantity;
        checkoutProducts.push(product);
      }
    }
    return checkoutProducts;
  }

  getCheckoutTotalPrice(): number {
    const products = this.getCheckoutProducts()
    let totalCartPrice = 0;
    for (const product of products) {
      if (product.quantity) { 
        const productCost = (product.price - product.discount) * product.quantity;
        totalCartPrice += productCost;
      }
    }
    return totalCartPrice;
  }

}
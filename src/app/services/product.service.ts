import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        category: "Category 1",
        name: "Product 1",
        description: "Product 1 description",
        price: 43,
        discount: 0,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 2,
        category: "Category 1",
        name: "Product 2",
        description: "Product 2 description",
        price: 120,
        discount: 53,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 3,
        category: "Category 2",
        name: "Product 3",
        description: "Product 3 description",
        price: 10,
        discount: 2,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 4,
        category: "Category 2",
        name: "Product 4",
        description: "Product 4 description",
        price: 10,
        discount: 0,
        image: "https://dummyimage.com/300x300/000/fff.png"
      }
    ];
  }

  getSingleProduct(productid: number): Product | undefined {
    return this.getProducts().find((product) => product.id === productid)
  }

  getSellPrice(product: Product): number {
    return product.price - product.discount;
  }

}

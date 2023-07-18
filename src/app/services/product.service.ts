import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // productData:[] = [];

  constructor() { }

  // getProducts(): Observable<[]> {
  //   return this.http.get<[]>('data.json');
  // }

  // writeProducts()

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
        price: 2,
        discount: 0,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 5,
        category: "Category 1",
        name: "Product 5",
        description: "Product 5 description",
        price: 54,
        discount: 7,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 6,
        category: "Category 1",
        name: "Product 6",
        description: "Product 6 description",
        price: 45,
        discount: 0,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 7,
        category: "Category 2",
        name: "Product 7",
        description: "Product 7 description",
        price: 13,
        discount: 4,
        image: "https://dummyimage.com/300x300/000/fff.png"
      },
      {
        id: 8,
        category: "Category 2",
        name: "Product 8",
        description: "Product 8 description",
        price: 65,
        discount: 0,
        image: "https://dummyimage.com/300x300/000/fff.png"
      }
    ];
  }

  getSingleProduct(productid: number): Product | undefined {
    return this.getProducts().find((product) => product.id === productid)
  }

  // getSingleProduct(productid: number): Product | undefined {
  //   this.getProducts().subscribe(data => {
  //     this.productData = data;
  //   })
  //   return this.productData.find((product: Product) => product.id === productid)
  // }

  getSellPrice(product: Product): number {
    return product.price - product.discount;
  }

}

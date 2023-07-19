import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  products: Product[] = [];

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>('../assets/data.json').subscribe((data) => {
      this.products = data;
    });
    return this.http.get<Product[]>('../assets/data.json');
  }

  getSingleProduct(productid: number): Product | undefined {
    return this.products.find((product: Product) => product.id === productid);
  }

  getSellPrice(product: Product): number {
    return product.price - product.discount;
  }

}

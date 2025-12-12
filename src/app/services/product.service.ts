import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../features/product/data/products';
import { listProducts } from '../features/product/data/list-products';

@Injectable({
  providedIn: 'root', // アプリ全体で使える
})
export class ProductService {
  constructor() {}

  /**
   * 商品一覧を取得
   */
  getProducts(): Observable<Product[]> {
    return of(listProducts);
  }

  /**
   * id 指定で単一商品を取得
   */
  getProductById(id: number): Observable<Product | undefined> {
    const product = listProducts.find((p) => p.id === id);
    return of(product);
  }
}

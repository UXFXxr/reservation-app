import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, products } from '../features/product/data/products';
import { listProducts } from '../features/product/data/list-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  /** 一覧ページ用: products.ts を返す */
  getFullProducts(): Product[] {
    return products;
  }

  /** 詳細ページ用: list-products.ts を返す（Observable で返す場合） */
  getListProducts(): Observable<Product[]> {
    return of(listProducts);
  }

  /** id 指定で取得（詳細ページ用） */
  getProductById(id: number): Observable<Product | undefined> {
    const product = listProducts.find((p) => p.id === id);
    return of(product);
  }
}

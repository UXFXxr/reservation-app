import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../features/product/models/product.model';
import { products as mongoProducts } from '../features/product/data/list-products'; // MongoDB用

@Injectable({ providedIn: 'root' })
export class ProductService {
  /** ID から商品を取得 */
  getProductById(id: string): Observable<Product | undefined> {
    return of(mongoProducts.find((p: Product) => p._id.toString() === id));
  }

  /** 商品一覧を取得 */
  getProducts$(): Observable<Product[]> {
    return of(mongoProducts);
  }
}

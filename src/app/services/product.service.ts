import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../features/product/models/product.model';
import { RelatedProduct } from '../features/product/models/related-product.model';
import { products as htmlProducts } from '../features/product/data/products';
import { products as mongoProducts } from '../features/product/data/list-products'; // MongoDB用

@Injectable({ providedIn: 'root' })
export class ProductService {
  /** MongoDB用 Product[] 取得 */
  getProducts$(): Observable<Product[]> {
    return of(mongoProducts);
  }

  /** _id 指定で1件取得 */
  getProductById(_id: string): Observable<Product | undefined> {
    return of(mongoProducts.find((p) => p._id === _id));
  }
  /** HTML表示用 RelatedProduct[] 取得 */
  getHtmlProducts$(): Observable<RelatedProduct[]> {
    return of(htmlProducts);
  }
}

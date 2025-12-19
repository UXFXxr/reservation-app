import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RelatedProduct } from '../features/product/models/related-product.model';
import { products as htmlProducts } from '../features/product/data/products'; // HTML 表示用の商品データ

@Injectable({ providedIn: 'root' })
export class RelatedProductService {
  /** HTML 表示用 RelatedProduct[] 取得 */
  getHtmlProducts$(): Observable<RelatedProduct[]> {
    return of(htmlProducts); // HTML 表示用の商品データを返す
  }
}

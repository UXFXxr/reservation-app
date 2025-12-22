import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../features/product/models/product.model';
import { RelatedProduct } from '../features/product/models/related-product.model';

// トップ一覧用
import { products as listPageProducts } from '../features/product/data/products';

// 詳細ページ用（MongoDB想定）
import { products as detailProducts } from '../features/product/data/list-products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  /* ===============================
   * トップページ一覧
   * products.ts
   * =============================== */
  getProductsForList$(): Observable<Product[]> {
    return of(listPageProducts);
  }

  /* ===============================
   * 詳細ページ上部
   * list-products.ts
   * =============================== */
  getProductById(id: string): Observable<Product | undefined> {
    return of(listPageProducts.find((p) => p._id === id));
  }

  /* ===============================
   * 詳細ページ下部（関連商品）
   * =============================== */
  getRelatedProducts$(): Observable<RelatedProduct[]> {
    return of(
      detailProducts.map((p) => ({
        _id: p._id,
        name: p.name,
        imageUrl: p.imageUrl,
        description: p.description,
        headingTxt: p.headingTxt,
      }))
    );
  }
}

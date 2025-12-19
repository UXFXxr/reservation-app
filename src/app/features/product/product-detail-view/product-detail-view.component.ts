import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // ← Location を追加
import { ActivatedRoute, Router } from '@angular/router'; // ← Router を追加
import { Observable, switchMap } from 'rxjs';

import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail-view',
  standalone: true,
  imports: [CommonModule], // ← CommonModule を追加（*ngIf, ngFor 用）
  templateUrl: './product-detail-view.component.html',
})
export class ProductDetailViewComponent {
  product$: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location, // ← Location 注入（戻る用）
    private router: Router // ← Router 注入（フォールバック用）
  ) {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.productService.getProductById(id!);
      })
    );
  }

  /** 前のページに戻る。履歴がなければ /product-detail へフォールバック */
  goBack(): void {
    if (history.length > 1) {
      this.location.back(); // ← 履歴があれば戻る
    } else {
      this.router.navigate(['/product-detail']); // ← 履歴がなければフォールバック
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← *ngIf / *ngFor 用
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, of } from 'rxjs'; // ← ★ of を追加
import { switchMap } from 'rxjs/operators'; // ← ★ ここ重要

import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail-view',
  standalone: true,
  imports: [CommonModule], // ← CommonModule を追加（*ngIf, ngFor 用）
  templateUrl: './product-detail-view.component.html',
})
export class ProductDetailViewComponent {
  product$!: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location, // ← 戻るボタン用
    private router: Router // ← フォールバック用
  ) {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');

        // ===============================
        // 🔽 ここが重要（変更点）
        // ===============================
        if (!id) {
          // URL が壊れている場合は一覧へ
          this.router.navigate(['/']);
          return of(undefined);
        }

        return this.productService.getProductById(id);
      })
    );
  }

  /** 前のページに戻る。履歴がなければ一覧ページへフォールバック */
  goBack(): void {
    if (history.length > 1) {
      this.location.back(); // ← 履歴があればブラウザバック
    } else {
      this.router.navigate(['/']); // ← 履歴がなければ一覧へ
    }
  }
}

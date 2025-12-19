import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  /** 詳細商品（MongoDB / API） */
  product$!: Observable<Product | undefined>;

  /** 関連商品（一覧） */
  relatedProducts$!: Observable<Product[]>; // MongoDB用の商品を表示

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('取得したID:', id);

    if (id) {
      // 1件取得 MongoDB用のデータを取得
      this.product$ = this.productService.getProductById(id);
      this.product$.subscribe((product) => console.log('取得した商品:', product));

      // 関連商品 自分も含む list-products.tsのデータを取得
      this.relatedProducts$ = this.productService.getProducts$();
    }
  }
}

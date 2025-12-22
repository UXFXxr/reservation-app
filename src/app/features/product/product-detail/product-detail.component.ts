import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product.model';
import { RelatedProduct } from '../models/related-product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  /** 詳細商品（list-products.ts） */
  product$!: Observable<Product | undefined>;

  /** 関連商品（RelatedProduct） */
  relatedProducts$!: Observable<RelatedProduct[]>; // ★ここがポイント

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.product$ = this.productService.getProductById(id);
      this.relatedProducts$ = this.productService.getRelatedProducts$();
    }
  }
}

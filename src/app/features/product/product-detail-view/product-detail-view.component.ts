import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// <a [routerLink]="...">でリンクを作る場合に必要
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { listProducts } from '../data/list-products'; // サービス名を確認してください

@Component({
  // HTMLで使うタグ名
  selector: 'app-product-detail-view',
  // NgModuleに登録せず単独で使用可能
  standalone: true,
  imports: [
    // *ngFor/*ngIfなどのAngularディレクティブを利用可能にする
    CommonModule,
    // [routerLink]を使ったリンクを利用可能にする
    RouterModule,
  ],
  // HTMLテンプレートファイル
  templateUrl: './product-detail-view.component.html',
  // スタイルファイル
  styleUrls: ['./product-detail-view.component.scss'],
})
export class ProductDetailViewComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // URL パラメータから ID を取得
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // 商品 ID に基づいてリストから商品を取得
      this.product = listProducts.find((product) => product.id.toString() === productId);
    }
  }
}

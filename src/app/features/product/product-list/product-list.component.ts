import { Component, OnInit } from '@angular/core';
// *ngIf/*ngForを使う場合に必要
import { CommonModule } from '@angular/common';
// <a [routerLink]="...">でリンクを作る場合に必要
import { RouterModule } from '@angular/router';

// 商品データをインポート（id を含む）
import { ProductService } from '../../../services/product.service';
import { Product } from '../data/products';

/*
  ProductListComponent
  商品一覧ページを表示するコンポーネント
  Standaloneコンポーネントとして定義
  AppComponentの<router-outlet>に差し込まれる
*/
@Component({
  selector: 'app-product-list', // HTMLで使うタグ名
  standalone: true, // NgModuleに登録せず単独で使用可能
  imports: [
    CommonModule, // *ngFor/*ngIfなどのAngularディレクティブを利用可能にする
    RouterModule, // [routerLink]を使ったリンクを利用可能にする
  ],
  templateUrl: './product-list.component.html', // HTMLテンプレートファイル
  styleUrls: ['./product-list.component.scss'], // スタイルファイル
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    // products.ts のデータを直接取得（同期）
    this.products = this.productService.getFullProducts();
  }
}

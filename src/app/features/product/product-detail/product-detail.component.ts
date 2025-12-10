import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// <a [routerLink]="...">でリンクを作る場合に必要
import { RouterModule } from '@angular/router';

// 商品データをインポート products.ts
import { products, Product } from '../data/products';

/*
  ProductDetailComponent
  商品の詳細ページを表示するコンポーネント
  Standaloneコンポーネントとして定義
  AppComponentの<router-outlet>に差し込まれる
*/
@Component({
  selector: 'app-product-detail', // HTMLで使うタグ名
  standalone: true, // NgModuleに登録せず単独で使用可能
  imports: [
    CommonModule, // *ngIf などの基本ディレクティブを利用可能にする
    RouterModule, // <a [routerLink]="...">でリンクを作る場合に必要
  ],
  templateUrl: './product-detail.component.html', // HTMLテンプレートファイル
  styleUrls: ['./product-detail.component.scss'], // スタイルファイル
})
export class ProductDetailComponent {
  /*
    product
    URLで受け取った id に対応する商品データ
    見つからない場合は undefined
  */
  product?: Product;

  constructor(private route: ActivatedRoute) {
    /*
      URLパラメータから id を取得
      例: /detail/1 → id = 1
    */
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    /*
      products 配列から該当する商品を検索
    */
    if (id !== null) {
      this.product = products.find((p) => p.id === id);
    }
  }
}

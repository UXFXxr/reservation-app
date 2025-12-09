import { Component } from '@angular/core';

/*
  ProductDetailComponent
  商品の詳細ページを表示するコンポーネント
  Standaloneコンポーネントとして定義
  AppComponentの<router-outlet>に差し込まれる
*/
@Component({
  selector: 'app-product-detail', // HTML で使うタグ名
  standalone: true, // NgModuleに登録せず単独で使用可能
  imports: [], // このコンポーネントで使用する他のモジュールやコンポーネントを追加可能
  templateUrl: './product-detail.component.html', // HTMLテンプレートファイル
  styleUrls: ['./product-detail.component.scss'], // スタイルファイル
})
export class ProductDetailComponent {
  // 必要に応じて変数やメソッドを追加
}

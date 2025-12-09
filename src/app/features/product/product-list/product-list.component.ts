import { Component } from '@angular/core';
// *ngIf/*ngForを使う場合に必要
import { CommonModule } from '@angular/common';
// <a [routerLink]="...">でリンクを作る場合に必要
import { RouterModule } from '@angular/router';

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
  /*
    products配列
    ダミーデータとして1～4を用意
    実際は ProductServiceを注入してHTTPで取得
    この変数をテンプレート内で*ngForなどで繰り返し表示
  */
  products: any = [1, 2, 3, 4];
}

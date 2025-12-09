import { Component } from '@angular/core';

/*
  NavbarComponent:
  - アプリ全体で共通のナビゲーションバーを表示するコンポーネント
  - Standaloneコンポーネントとして定義
  - AppComponentのimportsに追加することで全ページに表示可能
*/
@Component({
  selector: 'app-navbar', // HTMLで使うタグ名
  standalone: true, // NgModuleに登録せず単独で使用可能 app.component.tsにimportで追加
  templateUrl: './navbar.component.html', // ナビゲーションのHTMLテンプレート
  styleUrls: ['./navbar.component.scss'], // ナビゲーション用のスタイル
})
export class NavbarComponent {
  // 必要に応じてメニュー項目やクリックイベントなどを追加できる
}

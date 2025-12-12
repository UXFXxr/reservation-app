// AngularのComponentデコレーターをインポート
import { Component } from '@angular/core';
// ルーティング用outlet、URLに応じてコンポーネントを差し込む枠をインポート
import { RouterOutlet } from '@angular/router';
// 共通ナビゲーションバーのコンポーネントをインポート
import { NavbarComponent } from './common/navbar/navbar.component';

/*
  AppComponent
  アプリケーションのルートコンポーネント
  単一ページアプリSPAの枠として機能
  standalone: true によりモジュール不要で使用可能
*/
@Component({
  selector: 'app-root', // HTMLタグで使用するセレクター
  standalone: true, // Standaloneコンポーネントとして定義
  imports: [
    RouterOutlet, // URLに応じたコンポーネントを差し込む枠
    NavbarComponent, // 上部ナビゲーションを表示
  ],
  templateUrl: './app.component.html', // テンプレートのファイルパス
  styleUrls: ['./app.component.scss'], // スタイルのファイルパス
})
export class AppComponent {
  // アプリケーションタイトル（必要に応じてテンプレートで利用可能）
  title = 'reservation-app';
}

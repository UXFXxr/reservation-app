// Angular コアから必要なプロバイダをインポート
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
// ルーティング用のプロバイダをインポート
import { provideRouter } from '@angular/router';

// アプリ全体のルート定義をインポート
import { routes } from './app.routes';

/*
  appConfig
  Angularのアプリケーション全体に提供する設定
  providers配列でグローバルなサービスやルーティングを登録
*/
export const appConfig: ApplicationConfig = {
  providers: [
    // -------------------------------------------
    // 1. グローバルエラーリスナーを提供
    // -------------------------------------------
    provideBrowserGlobalErrorListeners(),
    /*
      補足
      ブラウザ上で発生した未処理のエラーを捕捉
      Angular がエラーをキャッチして console に出力
    */

    // -------------------------------------------
    // 2. Zone.js による変更検知の設定
    // -------------------------------------------
    provideZoneChangeDetection({ eventCoalescing: true }),
    /*
      補足
      イベントの coalescing（まとめて処理）を有効化
      パフォーマンス改善に寄与
    */

    // -------------------------------------------
    // 3. ルート情報の提供
    // -------------------------------------------
    provideRouter(routes),
    /*
      補足：
      先ほど定義した routes 配列を Angular に登録
      AppComponent 内の <router-outlet> で URL に応じたコンポーネントが差し込まれる
    */
  ],
};

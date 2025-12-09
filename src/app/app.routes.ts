import { Routes } from '@angular/router';

/*
  ★ ポイント
  loadComponentを使う場合は、コンポーネントを静的にimportする必要なし
  URLにアクセスしたときにだけコンポーネントを読み込むため初回ロードが軽くなる
  standalone コンポーネントとの組み合わせが推奨
*/

export const routes: Routes = [
  {
    // -------------------------------------------
    // トップページ（ルート /）
    // -------------------------------------------
    // loadComponent で遅延読み込みを指定
    path: '',
    loadComponent: () =>
      import('./features/product/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
    /*
      補足
      このルートにアクセスすると ProductListComponent が表示される
      デフォルト outlet に差し込まれる
      初回ロード時には読み込まれず、アクセス時にダウンロード
    */
  },
  {
    // -------------------------------------------
    // 詳細ページ（/detail）
    // -------------------------------------------
    path: 'detail',
    loadComponent: () =>
      import('./features/product/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
    /*
      補足
      /detail にアクセスすると ProductDetailComponent が表示される
      standalone + lazy-load の組み合わせで最適化されている
    */
  },
];

/*
  デフォルト outlet に差し込むため、AppComponent の <router-outlet> に表示される
  他のページを追加する場合は routes 配列にオブジェクトを追加するだけ
  静的 import は不要で、必要なときだけコンポーネントが読み込まれる
*/

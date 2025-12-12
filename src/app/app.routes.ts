// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // トップページ（商品一覧）
    path: '',
    loadComponent: () =>
      import('./features/product/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
    // 必要なら pathMatch: 'full' を追加（リダイレクトがある場合など）
  },
  {
    // 商品詳細一覧：id を受け取る
    path: 'detail/:id',
    loadComponent: () =>
      import('./features/product/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
  {
    // :idパラメータを受け取る
    path: 'view/:id',
    loadComponent: () =>
      import('./features/product/product-detail-view/product-detail-view.component').then(
        (m) => m.ProductDetailViewComponent
      ),
  },
  {
    // 未定義パスはトップへリダイレクト（または 404 コンポーネントにする）
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

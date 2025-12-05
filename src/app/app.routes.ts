import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, // 空のパスでProductListComponentを表示
  { path: 'detail', component: ProductDetailComponent }, // 詳細ページを表示
];

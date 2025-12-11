import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { products, Product } from '../data/products';
import { listProducts } from '../data/list-products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule, // *ngIf や *ngFor などの基本ディレクティブを使うために必要
    RouterModule, // <a [routerLink]> を使う場合に必要
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  /*
    product:
    URLパラメータで指定されたIDに対応する単一の商品データ
    見つからなければ undefined
  */
  product?: Product;

  /*
    products:
    既存の全商品配列
    リストページ用など、元のテンプレートを動かすために保持
  */
  // リストページ用のデータをインポート
  products: Product[] = listProducts;

  /*
    relatedProducts:
    詳細ページ専用のループ用配列（自分以外の商品などを表示）
  */
  relatedProducts: Product[] = [];

  constructor(private route: ActivatedRoute) {
    // URLパラメータから id を取得
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      // 単一商品の取得
      this.product = products.find((p) => p.id === id);

      // 詳細ページ専用ループ用配列を設定（例：自分以外の商品を関連商品として表示）
      this.relatedProducts = products.filter((p) => p.id !== id);
    }
  }
}

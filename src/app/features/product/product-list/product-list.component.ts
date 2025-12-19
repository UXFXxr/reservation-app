import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngIf/*ngFor
import { RouterModule } from '@angular/router'; // <a [routerLink]="...">
import { Observable } from 'rxjs';
// 商品データ
import { RelatedProductService } from '../../../services/related-product.service'; // RelatedProductService をインポート
import { RelatedProduct } from '../models/related-product.model'; // RelatedProduct 型をインポート
// 文字制限truncate.pipe.ts
import { TruncatePipe } from '../../../pipes/truncate.pipe';

/*
  商品一覧ページを表示するStandaloneコンポーネント定義
  AppComponentの<router-outlet>に差し込まれる
*/
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  /** HTML 表示用の関連商品データ（Observable） */
  products$!: Observable<RelatedProduct[]>;

  constructor(private relatedProductService: RelatedProductService) {} // ProductService から RelatedProductService に変更

  ngOnInit() {
    // HTML表示用の関連商品データを取得
    this.products$ = this.relatedProductService.getHtmlProducts$(); // RelatedProductService を使用
  }
}

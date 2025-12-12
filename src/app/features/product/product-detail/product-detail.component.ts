import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../data/products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product?: Product;
  relatedProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      // products.ts から全商品を取得
      const allProducts = this.productService.getFullProducts(); // Product[] 型

      // 詳細ページ用の商品
      this.product = allProducts.find((p) => p.id === id);

      // 関連商品（自分以外）
      this.relatedProducts = allProducts.filter((p) => p.id !== id);

      // 関連商品（自分も含む場合はフィルター不要）
      // this.relatedProducts = allProducts;
    }
  }
}

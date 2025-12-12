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
  products: Product[] = [];
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // ← Service を注入
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      // 単一商品を取得
      this.productService.getProductById(id).subscribe((p) => {
        this.product = p;
      });

      // 全商品を取得して関連商品を設定
      this.productService.getProducts().subscribe((all) => {
        this.products = all;
        this.relatedProducts = all.filter((p) => p.id !== id);
      });
    }
  }
}

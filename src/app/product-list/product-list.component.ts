import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // aリンク

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // RouterModule★aリンクrouterLink CommonModule★ngFor, ngIf
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  // ここに書くとhtmlに反映される
  products: any = [1, 2, 3, 4];
}

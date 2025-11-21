import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html', // ★ ファイル名と合わせる
  styleUrls: ['./product-list.component.scss'], // ★ 複数形にする
})
export class ProductListComponent {}

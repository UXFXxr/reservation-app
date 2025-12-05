// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // RouterModule をそのままインポート
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // ルートの表示に必要
    //RouterModule, // forRoot() は使わずに RouterModule をそのままインポート
    NavbarComponent,
    //ProductListComponent,
    //ProductDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reservation-app';
}

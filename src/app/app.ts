import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // ← ここにまとめる
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // ← 複数形に修正！
})
export class App {
  protected readonly title = signal('reservation-app');
}

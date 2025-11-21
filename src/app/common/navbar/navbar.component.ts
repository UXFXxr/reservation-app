import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, //Moduleを使わず動作する構成 app.tsにimportで追加
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}

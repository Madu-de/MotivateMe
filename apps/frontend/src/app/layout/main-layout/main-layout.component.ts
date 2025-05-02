import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../features/header/header.component';
import { MenuComponent } from '../../features/menu/menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    MenuComponent,
    RouterModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}

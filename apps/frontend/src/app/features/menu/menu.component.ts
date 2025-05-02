import { Component } from '@angular/core';
import { MenuOption } from './models/menuoption.model';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';

@Component({
  selector: 'app-menu',
  imports: [
    MenuOptionComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  options: MenuOption[] = [
    {
      icon: '🏠',
      label: 'Home',
      link: '',
      selected: true,
    },
    {
      icon: '👪',
      label: 'Friends',
      link: '',
      selected: false,
    },
    {
      icon: '⚙️',
      label: 'Settings',
      link: '',
      selected: false,
    },
  ];
}

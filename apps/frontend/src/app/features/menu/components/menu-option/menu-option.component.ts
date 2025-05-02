import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  imports: [
    NgClass,
  ],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.scss'
})
export class MenuOptionComponent {
  icon = input<string>();
  label = input<string>();
  selected = input<boolean>(false);
}

import { Component } from '@angular/core';
import { StreakDisplayComponent } from './components/streak-display/streak-display.component';
import { ProfileDisplayComponent } from './components/profile-display/profile-display.component';

@Component({
  selector: 'app-header',
  imports: [
    StreakDisplayComponent,
    ProfileDisplayComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

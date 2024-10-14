import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home/home-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, NavBarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'academy';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { TopBarComponent } from '../../../components/top-bar/top-bar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, NavBarComponent, FooterComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  scrollToTop() {
    window.scrollTo(0, 10);
  }
}

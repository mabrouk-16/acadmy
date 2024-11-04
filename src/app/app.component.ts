import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'academy';
  scrollToTop() {
    window.scrollTo(0, 10);
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { TopBarComponent } from '../../../components/top-bar/top-bar.component';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { HomeHeroComponent } from '../home/components/home-hero/home-hero.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-courses-details',
  standalone: true,
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
  imports: [
    FooterComponent,
    TopBarComponent,
    NavBarComponent,
    HomeHeroComponent,
  ],
})
export class CoursesDetailsComponent implements OnInit {
  constructor(public userService: UserService) {}
  hide = signal(false);
  ngOnInit() {}
  enroll() {}
}

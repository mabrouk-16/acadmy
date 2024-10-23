import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "../../../components/top-bar/top-bar.component";
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { HomeHeroComponent } from "../home/components/home-hero/home-hero.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [
    TopBarComponent,
    NavBarComponent,
    FooterComponent,
    HomeHeroComponent,
    RouterLink
  ],
})
export class CoursesComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}
  goToDetails(){
    this.router.navigate(['/', 'courses-details']);
  }
}

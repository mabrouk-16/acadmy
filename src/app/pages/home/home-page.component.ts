import { Component, OnInit } from '@angular/core';
import { HomeHeroComponent } from "./components/home-hero/home-hero.component";
import { HomeAboutComponent } from "./components/home-about/home-about.component";
import { WhyUsComponent } from "./components/why-us/why-us.component";
import { HomeCoursesComponent } from "./components/home-courses/home-courses.component";
import { HomeContactComponent } from "./components/home-contact/home-contact.component";
import { OurIntructorComponent } from "./components/our-intructor/our-intructor.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    HomeHeroComponent,
    HomeAboutComponent,
    WhyUsComponent,
    HomeCoursesComponent,
    HomeContactComponent,
    OurIntructorComponent
],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}

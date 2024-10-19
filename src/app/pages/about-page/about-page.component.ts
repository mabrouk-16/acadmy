import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "../../../components/top-bar/top-bar.component";
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { HomeHeroComponent } from "../home/components/home-hero/home-hero.component";
import { HomeAboutComponent } from "../home/components/home-about/home-about.component";
import { WhyUsComponent } from "../home/components/why-us/why-us.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  imports: [TopBarComponent, NavBarComponent, HomeHeroComponent, HomeAboutComponent, WhyUsComponent, FooterComponent],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

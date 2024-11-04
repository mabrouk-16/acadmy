import { Component, OnInit } from '@angular/core';
import { HomeHeroComponent } from '../home/components/home-hero/home-hero.component';
import { HomeAboutComponent } from '../home/components/home-about/home-about.component';
import { WhyUsComponent } from '../home/components/why-us/why-us.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  imports: [
    HomeHeroComponent,
    HomeAboutComponent,
    WhyUsComponent,
  ],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

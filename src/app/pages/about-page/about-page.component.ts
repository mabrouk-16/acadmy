import { Component, OnInit } from '@angular/core';
import { HomeAboutComponent } from '../home/components/home-about/home-about.component';
import { WhyUsComponent } from '../home/components/why-us/why-us.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  imports: [HomeAboutComponent, WhyUsComponent],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

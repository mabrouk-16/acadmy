import { Component, OnInit } from '@angular/core';
import { HomeHeroComponent } from "../home/components/home-hero/home-hero.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [
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

import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();
@Component({
  standalone: true,
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeCoursesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goToDetails() {
    this.router.navigate(['/', 'courses-details']);
  }
}

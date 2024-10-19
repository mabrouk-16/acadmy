import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "../../../components/top-bar/top-bar.component";
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [TopBarComponent, NavBarComponent],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

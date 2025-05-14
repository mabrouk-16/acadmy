import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-courses-details',
  standalone: true,
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
  imports: [],
})
export class CoursesDetailsComponent implements OnInit {
  constructor(public userService: UserService) {}
  hide = signal(false);
  ngOnInit() {}
  enroll() {}
}

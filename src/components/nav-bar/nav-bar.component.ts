import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public userService: UserService) {
    this.userService.getUser();
  }

  ngOnInit() {}
  logout() {
    this.userService.logout();
    this.userService.user.set(null);
  }
}

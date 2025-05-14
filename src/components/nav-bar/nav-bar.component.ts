import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../app/services/user.service';
import { UrlsNames } from '../../shared-models';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  urlsNames = UrlsNames;
  constructor(public userService: UserService) {
    this.userService.getUser();
  }

  ngOnInit() {}
  logout() {
    this.userService.logout();
    this.userService.user.set(null);
  }
}

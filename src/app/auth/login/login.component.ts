import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    public userService: UserService
  ) {}

  login(form: NgForm) {
    console.log(form.value);
    this.auth.login(form.value).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.router.navigate(['/home']);
          this.userService.saveUser(res.user);
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}
  register(form: NgForm) {
    console.log(form.value);
    this.auth.register(form.value).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.router.navigate(['/login']);
        } else {
          alert(res.msgError);
        }
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  authservice = inject(AuthService);

  temp = this.authservice.logout();
}

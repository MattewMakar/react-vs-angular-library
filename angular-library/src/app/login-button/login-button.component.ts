import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css'],
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {
    auth.isAuthenticated$.subscribe((value) => {
      if (value) router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
  loginWithPopup(): void {
    this.auth.loginWithPopup().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}


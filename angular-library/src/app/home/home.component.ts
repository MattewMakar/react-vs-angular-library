import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    auth.isAuthenticated$.subscribe((value) => {
      if (!value) router.navigate(['/login']);
    });
  }

  ngOnInit(): void {}
}

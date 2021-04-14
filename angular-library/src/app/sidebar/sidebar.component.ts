import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  title = 'Your Online Library';
  routes = [
    {
      name: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      name: 'Add book',
      icon: 'add_circle',
      link: '/add',
    },
    {
      name: 'Delete book',
      icon: 'delete',
      link: '/delete',
    },
    {
      name: 'Edit book',
      icon: 'edit',
      link: '/edit',
    },
    {
      name: 'Logout',
      icon: 'exit_to_app',
      link: '/login',
    },
  ];
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void { }
  
  doLogout(): void {

    this.auth.logout({ returnTo: this.doc.location.origin });
    
  }
}

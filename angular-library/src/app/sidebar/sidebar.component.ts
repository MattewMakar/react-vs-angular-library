import { Component, OnInit } from '@angular/core';

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

  ];
  constructor() {}

  ngOnInit(): void {}
}

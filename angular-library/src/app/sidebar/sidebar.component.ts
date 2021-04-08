import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title = "Your Online Library"
  routes = [
  {
    name: "Home",
    icon: "",
    link: "/list",
  },
  {
    name: "Add book",
    icon: "",
    link: "/add",
  },
  {
    name: "Delete book",
    icon: "",
    link: "/delete",
  },
  {
    name: "Edit book",
    icon: "",
    link: "/edit",
  },
  {
    name: "Logout",
    icon: "",
    link: "/login",
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}

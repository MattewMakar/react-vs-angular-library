import { Component, OnInit } from '@angular/core';
import { Book } from '../../Book';
import { DataManagerService } from '../data-manager.service';
import { concat } from 'rxjs';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private dataService: DataManagerService) {}

  ngOnInit(): void {
    this.dataService.getAllBooks().subscribe((data) => (this.books = data));
  }

  onDelete(id: string) {
    concat(
      this.dataService.deleteBooks(id),
      this.dataService.getAllBooks()
    ).subscribe((data) => {
      if (Array.isArray(data)) this.books = data;
    });
  }
}

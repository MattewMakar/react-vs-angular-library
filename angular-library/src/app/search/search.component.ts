import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Book';
import { DataManagerService } from '../data-manager.service';
import { concat } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  title: string = '';
  books: Book[];
  constructor(private dataService: DataManagerService) {}

  ngOnInit(): void {}

  onChange(value: any) {
    if (value) {
      this.title = value;
      this.dataService.getBooks(this.title).subscribe((data) => {
        this.books = data;
      });
    } else {
      this.books = [];
    }
  }
  onDelete(id: string) {
    concat(
      this.dataService.deleteBooks(id),
      this.dataService.getBooks(this.title)
    ).subscribe((data) => {
      if (Array.isArray(data)) this.books = data;
    });
  }
}

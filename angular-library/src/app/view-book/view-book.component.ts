import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/Book';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  id: string;
  book: Book;
  constructor(private route: ActivatedRoute, private dataService: DataManagerService) {
      this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dataService.getBooks(this.id).subscribe(data => {
      
      this.book = data[0]
    });
  }
}

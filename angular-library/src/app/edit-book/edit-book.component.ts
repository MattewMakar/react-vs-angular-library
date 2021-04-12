import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/Book';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  id: string;
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataManagerService
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dataService.getBooks(this.id).subscribe((data) => {

      this.book = data[0];
    });
  }
  onEdit() {
    
  }
}

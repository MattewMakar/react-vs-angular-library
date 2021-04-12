import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/Book';
import { DataManagerService } from '../data-manager.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  id: string;
  bookForm: FormGroup;
  loading: boolean = false;
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
      this.bookForm = new FormGroup({
        title: new FormControl(this.book.title, [Validators.required]),
        author: new FormControl(this.book.author),
        UUID: new FormControl(this.book.UUID, [Validators.required]),
        date: new FormControl(this.book.date),
        cover: new FormControl(this.book.cover),
        summary: new FormControl(this.book.summary),
      });
    });
    this.loading = true;
  }
  onSubmit() {}
}

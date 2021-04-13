import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  book: Book;
  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl(''),
    UUID: new FormControl('', [Validators.required]),
    date: new FormControl(''),
    cover: new FormControl(''),
    summary: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private dataService: DataManagerService,
    private router :Router
  ) {
    this.id = this.route.snapshot.params['id'];
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
  }
  onSubmit(): void {
    console.log(this.bookForm.value);

    if (this.bookForm.valid)
    {
      this.dataService.editBook(this.id, this.bookForm.value).subscribe(
        () => {
          this.router.navigate(['']);
        }
      );

    }
  }
}

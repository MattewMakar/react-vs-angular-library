import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl(''),
    UUID: new FormControl('', [Validators.required]),
    date: new FormControl(''),
    cover: new FormControl(''),
    summary: new FormControl(''),
  });
  constructor(private dataService: DataManagerService) { }

  ngOnInit(): void { }
  onSubmit(): void{
    if(this.bookForm.valid)
      this.dataService.addBook(this.bookForm.value).subscribe();
    }
}

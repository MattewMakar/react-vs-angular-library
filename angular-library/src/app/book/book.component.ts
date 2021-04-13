import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteClicked = new EventEmitter();
  constructor() {
  
  }

  ngOnInit(): void {
  if (!this.book?.cover)
    this.book.cover = '../../assets/No_Image_Available.jpg'; 
  }
  onDelete(value: string) {
    
    this.deleteClicked.emit(value)
  }
}

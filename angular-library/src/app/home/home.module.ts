import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books/books.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { EditBooksComponent } from '../edit-books/edit-books.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ViewBookComponent } from '../view-book/view-book.component';
import { BookComponent } from '../book/book.component';
import { SearchComponent } from '../search/search.component';


@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    DeleteBookComponent,
    EditBooksComponent,
    SearchComponent,
    BookComponent,
    EditBookComponent,
    ViewBookComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class HomeModule {} 

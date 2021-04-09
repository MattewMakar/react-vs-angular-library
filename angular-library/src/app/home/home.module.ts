import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books/books.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 


@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    DeleteBookComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class HomeModule {}

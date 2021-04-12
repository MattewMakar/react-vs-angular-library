import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { EditBooksComponent } from '../edit-books/edit-books.component';
import { HomeComponent } from './home.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ViewBookComponent } from '../view-book/view-book.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add', component: AddBookComponent },
      { path: 'delete', component: DeleteBookComponent },
      { path: 'edit', component: EditBooksComponent },
      { path: 'edit/:id', component: EditBookComponent },
      { path: 'view/:id', component: ViewBookComponent },
      { path: '', component: BooksComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

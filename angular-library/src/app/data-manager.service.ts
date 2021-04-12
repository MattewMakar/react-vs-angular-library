import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Book';
@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  constructor(private http: HttpClient) {}
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/books');
  }
  getBooks(id: string): Observable<Book[]> {
    return this.http.get<Book[]>(
      `http://localhost:8000/books/${encodeURI(id)}`
    );
  }
  deleteBooks(id: string): Observable<{}> {
    return this.http.delete(`http://localhost:8000/books/${encodeURI(id)}`, {
      responseType: 'text',
    });
  }
}

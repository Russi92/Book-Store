import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksService } from '../../core/services/books.service';
import { Books } from '../../core/models/books.interface';

@Component({
  selector: 'app-books',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  private readonly booksService = inject(BooksService);

  BooksList = signal<Books[]>([]);

  protected coverUrl(book: Books): string {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`;
  }

  ngOnInit(): void {
    this.getAllBooksData();
  }

  getAllBooksData(): void {
    this.booksService.getAllBooks().subscribe({
      next: (res) => {
        this.BooksList.set(res);
      },
    });
  }
}

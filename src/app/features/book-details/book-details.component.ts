import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../core/services/books.service';
import { Books } from '../../core/models/books.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [CurrencyPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit{

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly booksService = inject(BooksService);

  bookDetails = signal<Books>({} as Books)

  protected coverUrl(book: Books): string {
      return `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`;
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.getBookDetails(param.get('id')!)
    })
  }

  getBookDetails(id:string):void{
    this.booksService.getSpecificBook(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.bookDetails.set(res)
      }
    })
  }
  
}

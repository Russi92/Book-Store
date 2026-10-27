import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly httpClient = inject(HttpClient);

  getAllBooks(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/Books`);
  }

  getSpecificBook(bookId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/Books/${bookId}`);
  }
}

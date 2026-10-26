export interface Books {
  id: number;
  title: string;
  author: string;
  isbn: string;
  genre: string;
  publishedYear: number;
  pages: number;
  language: string;
  price: number;
  rating: number;
  available: boolean;
  tags: string[];
}

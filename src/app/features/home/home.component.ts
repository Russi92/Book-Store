import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Category {
  name: string;
  icon: string;
  count: number;
}

interface FeaturedBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  rating: number;
  cover: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly categories: readonly Category[] = [
    { name: 'Programming', icon: 'fa-code', count: 124 },
    { name: 'Science Fiction', icon: 'fa-rocket', count: 86 },
    { name: 'Classics', icon: 'fa-feather-pointed', count: 152 },
    { name: 'Fantasy', icon: 'fa-wand-magic-sparkles', count: 97 },
    { name: 'History', icon: 'fa-landmark', count: 64 },
    { name: 'Self-Help', icon: 'fa-seedling', count: 73 },
  ];

  protected readonly featuredBooks: readonly FeaturedBook[] = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      genre: 'Programming',
      price: 37.99,
      rating: 4.4,
      cover: 'from-[#264653] to-[#12262e]',
    },
    {
      id: 6,
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      price: 10.99,
      rating: 4.6,
      cover: 'from-[#B45309] to-[#5c2a05]',
    },
    {
      id: 18,
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Help',
      price: 16.99,
      rating: 4.4,
      cover: 'from-[#3f6212] to-[#1f3306]',
    },
    {
      id: 24,
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      genre: 'Fantasy',
      price: 11.99,
      rating: 4.5,
      cover: 'from-[#6B21A8] to-[#35104f]',
    },
  ];

  protected readonly stats: readonly { value: string; label: string }[] = [
    { value: '2,400+', label: 'Books in stock' },
    { value: '18', label: 'Genres covered' },
    { value: '12k', label: 'Happy readers' },
    { value: '4.8', label: 'Average rating' },
  ];

  protected readonly perks: readonly { icon: string; title: string; text: string }[] = [
    { icon: 'fa-truck-fast', title: 'Free delivery', text: 'On every order over $50' },
    { icon: 'fa-shield-halved', title: 'Secure payment', text: 'Your data stays protected' },
    { icon: 'fa-rotate-left', title: 'Easy returns', text: '30 days, no questions asked' },
  ];
}

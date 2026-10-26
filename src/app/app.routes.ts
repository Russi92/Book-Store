import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent),title:'Home | Book Haven'
  },
  {
    path: 'books',
    loadComponent: () => import('./features/books/books.component').then((c) => c.BooksComponent),title:'Books | Book Haven'
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then((c) => c.CategoriesComponent),title:'Categories | Book Haven'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((c) => c.AboutComponent),title:'About | Book Haven'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((c) => c.ContactComponent),title:'Contact | Book Haven'
  },
  {
    path: 'terms&conditions',
    loadComponent: () => import('./features/terms/terms.component').then((c) => c.TermsComponent),
    title: 'Terms & Conditions | Book Haven',
  },
  {path : "privacy&policy" , loadComponent : () => import('./features/privacy/privacy.component').then((c) => c.PrivacyComponent)},
  { path: '**', component: NotFoundComponent },
];

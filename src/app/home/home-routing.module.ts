import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BooksComponent } from '../books/books.component';
const routes: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [HomeComponent,BooksComponent];

}

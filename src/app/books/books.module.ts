import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    BooksRoutingModule
  ],
  declarations: [BooksRoutingModule.components]
})
export class BooksModule { }

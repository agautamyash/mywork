import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    HomeRoutingModule
  ],
  declarations: [HomeRoutingModule.components]
})
export class HomeModule { }

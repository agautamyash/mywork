import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,AboutRoutingModule,
  ],
  declarations: [AboutRoutingModule.components]
})
export class AboutModule { }

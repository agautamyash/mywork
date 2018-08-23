import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksComponent } from '../books/books.component';
@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']

})
export class HomeComponent {

  mynameparent: string = "Arpan Gautam";
  @ViewChild(BooksComponent) book;

  constructor() {
    console.log("i am home component constructor");
    
  }

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  submit(event) {
    console.log(event);
    console.log(this.form.controls.name.value);
  }

  ngOnInit() { console.log("---in home- ngOnInit");
}
  updateFromChild($event) {

    console.log(this.mynameparent);
    console.log("---in home refresh ---1", this.mynameparent);
    this.mynameparent = $event;
    console.log("---in home refresh---2", this.mynameparent);
  }

  ngAfterViewInit() {
    this.mynameparent = this.book.mynamechild;
    console.log("---ngAfterViewInit ---1", this.mynameparent);
  }

}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParatagDirective } from '../paratag.directive';
import { ChangedirDirective } from '../changedir.directive';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  shown: boolean = true;
  myarray:Array<any>=['arpan','gautam','sharma']

  canbenull: string;
  @Input() mynamechild: string

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();


  constructor() { console.log("---in book- constructor" , this.mynamechild); }

  ngOnInit() {
    this.canbenull = null
  }

  ngAfterViewInit() { }

  updatenameInBook() {
   this.mynamechild = "--AG GAUTAM--";
    this.change.emit(this.mynamechild);
  }

}

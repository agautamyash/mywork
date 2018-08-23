import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParatag]'
})
export class ParatagDirective {

  constructor(private element: ElementRef) { }


  ngAfterViewInit() {

    if (this.element.nativeElement.innerText == 'arpan') {
      this.element.nativeElement.style.color = 'green';

    }
  }


}

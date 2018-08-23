import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangedir]'
})
export class ChangedirDirective {

   constructor(Element: ElementRef) {
      console.log(Element);
      Element.nativeElement.innerText="Text is changed by changeText Directive. ";
   }

}

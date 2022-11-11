import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private elr:ElementRef) {
    elr.nativeElement.style.color="red"
    // elr.nativeElement.style.display="none"
   }

}

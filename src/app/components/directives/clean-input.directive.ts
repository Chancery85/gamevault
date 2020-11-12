import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input',
})

export class CleanInputDirective {

  constructor(private el: ElementRef){
    this.el.nativeElement.setAttribute('data-lpignore', 'true');
  }
}

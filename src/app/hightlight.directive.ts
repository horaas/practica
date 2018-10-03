import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @HostListener('mouseenter')

  onMouseEnter() {
    this.elementRef.nativeElement.style.background = 'red';
  }

  @HostListener('mouseleave')

  onMouseleave() {
    this.elementRef.nativeElement.style.background = null;
  }
  constructor(private elementRef: ElementRef) {
    // console.log(this.elementRef);
    // this.elementRef.nativeElement.style.background = 'red';
  }

}

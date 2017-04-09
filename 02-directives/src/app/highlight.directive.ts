import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener ('mouseenter') mouseover () {
   	this.backgroundColor = 'white';
  }

  @HostListener ('mouseleave') mouseleave () {
   	this.backgroundColor = 'green';
  }

  @HostBinding ('style.backgroundColor') get setColor () {
  	return this.backgroundColor;
  }

  private backgroundColor = 'white';
  constructor(private el: ElementRef, private renderer: Renderer) {
       // el.nativeElement.style.backgroundColor = 'yellow'; 
       // renderer.setElementStyle(el.nativeElement, 'background-color', 'yellow'); // use this to manipulate styles
    }

}

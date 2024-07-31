import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    
    // this.rendrer.addClass(this.el.nativeElement,'highlight')
    this.highlight('yellow');
  
  }
  @HostListener('mouseout') onMouseOut(){
    // this.rendrer.removeClass(this.el.nativeElement,'highlight')
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

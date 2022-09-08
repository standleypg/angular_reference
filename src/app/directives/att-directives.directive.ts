import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttDirectives]',
})
export class AttDirectivesDirective {
  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }

  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

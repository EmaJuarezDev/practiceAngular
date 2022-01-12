import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[intentoColor]',
})
export class ClaseColor {
  constructor(private cel: ElementRef) {
    //cel.nativeElement.style.backgroundColor = 'color';
  }

  // @Input('intentoColor') intentoColor: string;

  @Input() defaultColor: string;
  @Input('intentoColor') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || this.highlightColor || 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.highlightColor || 'royalblue');
  }

  private highlight(color: string) {
    this.cel.nativeElement.style.backgroundColor = color;
  }
}

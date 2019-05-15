import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
 
  constructor(private el: ElementRef, private render:Renderer2) {
    
   }
 @HostListener('mouseover') hover(){
  this.render.setStyle(this.el.nativeElement, 'color','red');
 }
 @HostListener('mouseout') hover1(){
  this.render.setStyle(this.el.nativeElement, 'color','#fff');
 }
}

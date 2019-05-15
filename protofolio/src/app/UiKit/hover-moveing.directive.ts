import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverMoveing]'
})
export class HoverMoveingDirective implements OnInit {
 windowOFF:any;
 windowOFFY:any;
 BoxOFF:any;
 BoxOFFY:any;
 TotalOFF:any;
 Moving:any;
 TotalOFF1:any;
 Moving1:any;
  constructor(private el:ElementRef, private render:Renderer2) { 

  }

 @HostListener('mousemove', ['$event']) move(event){
  this.windowOFF  = event.clientX;
  this.windowOFFY  = event.clientY;
  this.BoxOFF = this.el.nativeElement.getBoundingClientRect().x;
  this.BoxOFFY = this.el.nativeElement.getBoundingClientRect().y;
  this.TotalOFF = this.windowOFF - this.BoxOFF;
  this.TotalOFF1 = this.windowOFFY - this.BoxOFFY;
  this.Moving = this.TotalOFF / 9;
  this.Moving1 = this.TotalOFF1 / 9;
 this.render.setStyle(this.el.nativeElement, 'left',  this.Moving + 'px');
 this.render.setStyle(this.el.nativeElement, 'top',  this.Moving1 + 'px');
 }
 ngOnInit(){
  
 }
}

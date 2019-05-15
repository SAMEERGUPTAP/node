import { Directive, ElementRef, Renderer2 } from "@angular/core";



@Directive({
    selector:'[appColor]'
})

export class AppColor{
    constructor(private el:ElementRef,  private render:Renderer2){
             render.setStyle(el.nativeElement, 'color', '#e3872d');
    }
}
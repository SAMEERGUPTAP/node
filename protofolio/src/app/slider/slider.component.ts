import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  windowH:any; 
  windowTOp:any;
  main:any;
  @ViewChild('slider') slider: ElementRef;
  constructor(private render:Renderer2) { 
    this.windowH = (window.innerHeight);
   
  }

  ngOnInit() {
    // window.addEventListener('scroll', ()=> {
    //  this.windowTOp = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //  this.main = - (this.windowTOp / 3);
    //  this.render.setStyle(this.slider.nativeElement, 'background-position-y', this.main + 'px');
    //  console.log(this.windowTOp)
    // });
  }

 

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
slideLeft:boolean = false;
@Output() valueChange = new EventEmitter();
@Input() sendItem:string;
 list:any = [];
 
  constructor() {
    
    this.list = [
      {
        home: 'Home',
        about: 'About',
        service :'Services',
        protofolio :'Protofolio',
        contact :'Contact'

      }
    ]
   }

  ngOnInit() {
    // console.log(this.sendItem)
  }
  slideMe(){
   this.slideLeft = !this.slideLeft;
   this.valueChange.emit(this.slideLeft);
  }
 
}

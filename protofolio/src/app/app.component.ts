import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'First';
  item:string ='sameer gupta';
  reducePad:boolean = false;
  aboutOffset:any;
  @ViewChild('abt') abt:ElementRef; 
  changePadding(v){
    this.reducePad = v;
  }
ngOnInit(){
  this.aboutOffset = this.abt.nativeElement.getBoundingClientRect();
  console.log(this.aboutOffset)
}
}

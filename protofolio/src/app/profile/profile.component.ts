import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 name:string ='sameer';
 count:number;
 counter:number;
 changename:any = [];
 changenameL:number;
 web:any = ['W','E','B',' ','D','E','S','I','G','N','E','R'];
 webL:number;
 change:any;
 newName:string = '';
  constructor() {
    
   }

  ngOnInit() {
    this.changeName();
  }
   
  changeName(){
    this.counter = 0;
    this.changename = ['F','R','O','N','T','E','N','D',' ','D','E','V','E','L','O','P','E','R'];
    let clear = setInterval( () => {
     if(this.counter < this.changename.length){
         this.newName += this.changename[this.counter];
         this.counter++;
     }
     if(this.counter == this.changename.length){
      this.newName.split("");
      this.count = this.counter;
      if(this.count > 0){
        console.log(this.count) ;
       this.newName = this.newName.slice(this.count, 1);
       this.count--;
      }
    }
     
    
  },150);
    
}
}

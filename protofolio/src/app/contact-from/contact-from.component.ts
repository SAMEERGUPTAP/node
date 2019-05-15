import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css']
})
export class ContactFromComponent implements OnInit {
  name:string;
  password:number;
  message:string;
  constructor() { 

  }

  ngOnInit() {

  }
  send(value){
   console.log(value);
  }
}

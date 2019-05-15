import { Component, OnInit } from '@angular/core';
import{ DataService} from '../service/cutomData.service';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  count = 1;
  data:any = [];
  constructor(private DataService: DataService) { 
    this.data = this.DataService.data;
  }

  ngOnInit() {
  }

  change(){
    this.count++;
    if(this.count > 3){
      this.count = 1;
    }
  }
  Delete(ind){
   this.data.splice(ind,1);
  }
}

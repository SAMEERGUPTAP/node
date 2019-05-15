import { Injectable } from "@angular/core";
import { expressionType } from '@angular/compiler/src/output/output_ast';


@Injectable()

export class DataService {
    data:any =[];
    constructor(){
        this.data = [
            {
              id : 1,
              name : 'sameer',
              address : 'd-155 new ashok nagar',
              contact : 8198333611
            },
            {
              id : 2,
              name : 'Vansh',
              address : 'd-155 new ashok nagar',
              contact : 8198333611
            },
            {
              id : 3,
              name : 'khushbu',
              address : 'd-155 new ashok nagar',
              contact : 8198333611
            }
          ]
    }
}
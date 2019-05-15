import { Pipe, PipeTransform } from '@angular/core';
import { visitAll } from '@angular/compiler/src/render3/r3_ast';
import { element } from '@angular/core/src/render3';

@Pipe({name: 'reverseStr'})
export class ReverseStr implements PipeTransform {
  transform(value: string): string {
    
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }
}


@Pipe({name: 'tirm'})
export class tirm implements PipeTransform {
  transform(value: string, l:number, dot:string) {
    return this.tirm(value, l, dot);

   
  }
  tirm(value :string, l:number, dot:string){
     if(value && value.length > l){
         return value.substr(0,3).concat(dot);
     }
     else{
         return value;
     }
  }
}
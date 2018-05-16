import { Injectable, OnInit } from '@angular/core';
import { emp } from './info'
import { employees } from './people'


@Injectable({
  providedIn: 'root'
})
export class FunService  {
  emp2:emp[]=employees;

  add(a){
    this.emp2.forEach(element => {
      if (element.id == a) {
        element.amt = element.amt + 1;
      }
    });
    // this.gettotal('reg');
  }
  
  
  
  delete(a){
    this.emp2.forEach(element => {
      if (element.id == a) {
        element.amt = element.amt - 1;
      }
    });
    // this.gettotal('reg');
  }

  gettotal(region)
  {
    let sum=0;
    // for (let i of employees){
    //   console.log(i.amt);
    //   sum=sum+i.amt;
    //   return sum;
    // }
    this.getregion(region).forEach(element => {
      
      sum = sum + element.amt;
    });
    return sum;
  }

  getregion(region){
    return this.emp2.filter(function (emp) { return emp.reg == region;})
  }
  

  constructor() { }

  
}
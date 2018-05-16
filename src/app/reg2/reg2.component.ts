import { Component, OnInit } from '@angular/core';
import { employees } from '../people'; 
import { FunService } from '../fun.service';
import { emp } from '../info';

@Component({
  selector: 'app-reg2',
  templateUrl: './reg2.component.html',
  styleUrls: ['./reg2.component.css'],
  providers: [FunService]
})
export class Reg2Component implements OnInit {

  constructor(private serv1: FunService) { }
  emp4: emp[];
  getamt(): void {
    this.emp4 = this.serv1.emp2;
  }
  ngOnInit() {
    this.getamt();
  }

  

}

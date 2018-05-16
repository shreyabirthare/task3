import { Component, OnInit } from '@angular/core'; 
import { employees } from '../people'; 
import { FunService } from '../fun.service';
import { emp } from '../info';


@Component({
  selector: 'app-reg1',
  templateUrl: './reg1.component.html',
  styleUrls: ['./reg1.component.css'],
  providers: [FunService]
})
export class Reg1Component implements OnInit {

  constructor(private serv1: FunService) { }
  emp3: emp[]= employees;
  getamt(): void {
    this.emp3 = this.serv1.emp2;
  }
  ngOnInit() {
    this.getamt();
    console.log(this.serv1.getregion("reg1"));
  }

}

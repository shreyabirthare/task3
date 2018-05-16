import { Component } from '@angular/core';
import { FunService } from './fun.service';
import { emp } from './info';
import { employees } from './people';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FunService]
})
export class AppComponent {
  constructor(private serv1: FunService) { }
  emp5: emp[];
  getamt(): void {
    this.emp5 = this.serv1.emp2;
  }
  ngOnInit() {
    this.getamt();
  }

  title = 'TASK 3';
}

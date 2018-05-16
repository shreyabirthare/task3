import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Reg1Component } from './reg1/reg1.component';
import { FunService } from './fun.service';
import { Reg2Component } from './reg2/reg2.component';

@NgModule({
  declarations: [
    AppComponent,
    Reg1Component,
    Reg2Component
  ],
  imports: [
    BrowserModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

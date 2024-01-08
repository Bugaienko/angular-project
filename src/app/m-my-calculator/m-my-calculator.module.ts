import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyCalculatorComponent} from "../my-calculator/my-calculator.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MyCalculatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MyCalculatorComponent,
  ],
  providers: []
})
export class MMyCalculatorModule { }

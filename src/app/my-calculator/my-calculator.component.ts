import {Component} from '@angular/core';

interface CalcGroup {
  first: CalcVar;
  second: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modifier: CalcModifiers;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divider = '/'
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square'
}

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.scss']
})
export class MyCalculatorComponent {

  public calcOperations = CalcOperations;
  public calcModifiers = CalcModifiers;

  public history: string[] = [];

  public operationsBetweenGroups: CalcOperations[] = [];

  public calcGroups: CalcGroup[] = [
    {
      first: {
        value: 10,
        modifier: CalcModifiers.none
      },
      second: {
        value: 5,
        modifier: CalcModifiers.none
      },
      operation: CalcOperations.plus
    }
  ]

  public addGroup() {
    this.calcGroups.push({
      first: {
        value: 0,
        modifier: CalcModifiers.none
      },
      second: {
        value: 0,
        modifier: CalcModifiers.none
      },
      operation: CalcOperations.plus
    })
  }

  public removeGroup(index: number) {
    this.calcGroups.splice(index, 1);
  }

  public result: number | undefined = undefined;

  public calculate() {
    this.result = 1;
  }


  // public first: number = 1;
  // public second: number = 1;
  //
  // public operation: string = '+';
  // public operations: string[] = ['+', '-', '*', '/'];
  //
  // public result: number | undefined = undefined;
  // public result1 ?: number; // упрощенный синтаксис записи

  // public calculate() {
  //   switch (this.operation) {
  //     case '+':
  //       this.result = this.first + this.second;
  //       break;
  //     case '-':
  //       this.result = this.first - this.second;
  //       break;
  //     case '*':
  //       this.result = this.first * this.second;
  //       break;
  //     case '/':
  //       this.result = this.first / this.second;
  //       break;
  //   }
  // }
}

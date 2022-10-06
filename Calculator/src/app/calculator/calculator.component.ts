import { Component } from '@angular/core';


@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],


})
export class CalculatorComponent {
  result: string = "";
  longButtons: string[] = ['AC', 'CE'];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];
  private oldValue: string = "";
  private curValue: string = "";
  public history: string[] = []


  addToExpression(value: string) {

    if (this.result != '') {
      this.oldValue = this.curValue;
      this.curValue = value;
    }
    if (value == 'AC') {
      this.result = '';
    } else if (value == 'CE') {
      this.result = this.oldValue != "=" ? this.result.slice(0, -1) : this.result;
    } else if (value == '=') {
      this.result = eval(this.result);
    } else if (value == '=') {
      this.result = eval(this.result);
      this.history.push(this.result);
    } else {
      this.result += value;

    }
  }
}

import "./style.scss";
import { divInput } from "./const";
import { Box, element } from "./box";

export class Input {
  constructor(result, operation, twoNumber, firstNumber, divInput) {
    this.result = result;
    this.operation = operation;
    this.twoNumber = twoNumber;
    this.firstNumber = firstNumber;
    this.divInput = divInput;
  }

  render() {
    this.divInput.innerHTML = "";
    if (!this.result && this.operation && this.twoNumber) {
      this.divInput.innerHTML = `${this.firstNumber} ${this.operation} ${this.twoNumber}`;
    } else if (!this.result && this.operation && this.firstNumber) {
      this.divInput.innerHTML = `${this.firstNumber} ${this.operation}`;
    } else if (this.result) {
      this.divInput.innerHTML = `${this.firstNumber} ${this.operation} ${this.twoNumber} = ${this.result}`;
    } else {
      this.divInput.innerHTML = this.firstNumber;
    }

    if (!this.divInput.innerHTML) {
      this.divInput.classList.add("inputNull");
    } else {
      this.divInput.className = "input";
    }

    return this.divInput;
  }
}

import "./style.scss";
import { divInput } from "./const";

export class Input {
  constructor(result, operation, twoNumber, firstNumber) {
    this.result = result;
    this.operation = operation;
    this.twoNumber = twoNumber;
    this.firstNumber = firstNumber;
  }

  render() {
    divInput.className = "input";

    if (!this.result && this.operation && this.twoNumber) {
      divInput.innerHTML = `${this.firstNumber} ${this.operation} ${this.twoNumber}`;
    } else if (!this.result && this.operation && this.twoNumber) {
      divInput.innerHTML = `${this.firstNumber} ${this.operation}`;
    } else if (this.result) {
      divInput.innerHTML = `${this.firstNumber} ${this.operation} ${this.twoNumber} = ${this.result}`;
    } else {
      divInput.innerHTML = this.firstNumber;
    }

    if (!divInput.innerHTML) {
      divInput.classList.add("inputNull");
    }

    return divInput;
  }
}

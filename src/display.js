import "./style.scss";
import { Calculator } from "./calculator";

export class Display {
  constructor() {}

  render() {
    const calculator = new Calculator();
    calculator.renderCalculator();
  }
}

const display = new Display();
display.render();

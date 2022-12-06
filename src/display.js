import "./style.scss";
import { Calculator } from "./calculator";
import { ROOT_BODY } from "./const";

export class Display {
  constructor() {}

  render() {
    const calculator = new Calculator();
    ROOT_BODY.innerHTML = "";
    ROOT_BODY.appendChild(calculator.renderCalculator(true));
  }
}

const display = new Display();
display.render();

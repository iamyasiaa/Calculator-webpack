import "./style.scss";
import { Calculator } from "./calculator";

const ROOT_BODY = document.getElementById("body");

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

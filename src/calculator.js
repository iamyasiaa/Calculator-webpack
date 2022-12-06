import "./style.scss";
import { Button } from "./button";
import {
  arrayButton,
  arrayNumber,
  arrayOperation,
  divButtons,
  divCalculator,
  divInput,
} from "./const";
import { Input } from "./input";

const ROOT_BODY = document.getElementById("body");

export class Calculator {
  constructor() {
    this.result = "";
    this.operation = "";
    this.twoNumber = "";
    this.firstNumber = "";
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(value, operation) {
    if (operation === "number") {
      if (!this.result) {
        if (this.operation) {
          this.twoNumber = this.twoNumber ? this.twoNumber + value : value;
        } else {
          this.firstNumber = this.firstNumber
            ? this.firstNumber + value
            : value;
        }
      }
    } else {
      switch (value) {
        case "+":
          if (this.result) {
            this.operation = value;
            this.firstNumber = this.result;
            this.twoNumber = "";
            this.result = "";
          } else {
            this.operation = value;
          }

          break;
        case "-":
          if (this.result) {
            this.operation = value;
            this.firstNumber = this.result;
            this.twoNumber = "";
            this.result = "";
          } else {
            this.operation = value;
          }
          break;
        case "*":
          if (this.result) {
            this.operation = value;
            this.firstNumber = this.result;
            this.twoNumber = "";
            this.result = "";
          } else {
            this.operation = value;
          }
          break;
        case "/":
          if (this.result) {
            this.operation = value;
            this.firstNumber = this.result;
            this.twoNumber = "";
            this.result = "";
          } else {
            this.operation = value;
          }
          break;
        case "=":
          let result;
          const first = this.firstNumber;
          const two = this.twoNumber;
          const operation = this.operation;

          if (first && two) {
            if (operation === "+") {
              result = +first + +two;
            } else if (operation === "-") {
              result = first - two;
            } else if (operation === "*") {
              result = +first * +two;
            } else {
              result = +first / +two;
            }
            this.result = result;
          }

          break;
        case "AC":
          this.operation = "";
          this.firstNumber = "";
          this.twoNumber = "";
          this.result = "";
          break;
      }
    }

    this.renderInput();
  }

  renderInput() {
    const input = new Input(
      this.result,
      this.operation,
      this.twoNumber,
      this.firstNumber
    );

    divCalculator.appendChild(input.render());
  }

  renderCalculator(firstRender) {
    const input = new Input(
      this.result,
      this.operation,
      this.twoNumber,
      this.firstNumber
    );

    divButtons.className = "buttons-array";
    divCalculator.className = "calculator";
    divButtons.innerHTML = "";

    let arrayButtonClass = arrayButton.map((item) => {
      const button = new Button(this.onClickButton, item.value, item.operation);

      return button.render();
    });

    arrayButtonClass.forEach((item) => {
      divButtons.appendChild(item);
    });

    divCalculator.appendChild(input.render());
    divCalculator.appendChild(divButtons);

    if (firstRender) {
      return divCalculator;
    } else {
      ROOT_BODY.innerHTML = "";
      ROOT_BODY.appendChild(divCalculator);
    }
  }
}

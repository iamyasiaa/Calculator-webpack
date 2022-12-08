import "./style.scss";
import { Button } from "./button";
import { arrayButton, ENUM_OPERATION, ROOT_BODY } from "./const";
import { Input } from "./input";
import { Box, element } from "./box";

export class Calculator {
  constructor() {
    this.result = "";
    this.operation = "";
    this.twoNumber = "";
    this.firstNumber = "";
    this.onClickButton = this.onClickButton.bind(this);
    this.divCalculator = new Box("calculator").render();
    this.divButtons = new Box("buttons-array").render();
    this.divInput = new Box("input").render();
  }

  onClickButton(value, operation) {
    if (operation === ENUM_OPERATION.NUMBER) {
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
      this.firstNumber,
      this.divInput
    );

    this.divCalculator.appendChild(input.render());
  }

  renderCalculator(firstRender) {
    const input = new Input(
      this.result,
      this.operation,
      this.twoNumber,
      this.firstNumber,
      this.divInput
    );

    this.divButtons.innerHTML = "";

    let arrayButtonClass = arrayButton.map((item) => {
      const button = new Button(this.onClickButton, item.value, item.operation);

      return button.render();
    });

    this.divButtons.append(...arrayButtonClass);
    this.divCalculator.appendChild(input.render());
    this.divCalculator.appendChild(this.divButtons);

    if (firstRender) {
      return this.divCalculator;
    } else {
      ROOT_BODY.innerHTML = "";
      ROOT_BODY.append(this.divCalculator);
    }
  }
}

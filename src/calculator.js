import "./style.scss";
import { Button } from "./button";

const ROOT_BODY = document.getElementById("body");

export class Calculator {
  constructor() {
    this.result = "";
    this.operation = "";
    this.twoNumber = "";
    this.firstNumber = "";
  }

  onClickButtonNumber(ev) {
    if (!this.result) {
      if (this.operation) {
        this.twoNumber = this.twoNumber
          ? this.twoNumber + ev.target.name
          : ev.target.name;
      } else {
        this.firstNumber = this.firstNumber
          ? this.firstNumber + ev.target.name
          : ev.target.name;
      }
    }
  }

  onClickButtonOperation(ev) {
    switch (ev.target.name) {
      case "+":
        if (this.result) {
          this.operation = ev.target.name;
          this.firstNumber = this.result;
          this.twoNumber = "";
          this.result = "";
        } else {
          this.operation = ev.target.name;
        }

        break;
      case "-":
        if (this.result) {
          this.operation = ev.target.name;
          this.firstNumber = this.result;
          this.twoNumber = "";
          this.result = "";
        } else {
          this.operation = ev.target.name;
        }
        break;
      case "*":
        if (this.result) {
          this.operation = ev.target.name;
          this.firstNumber = this.result;
          this.twoNumber = "";
          this.result = "";
        } else {
          this.operation = ev.target.name;
        }
        break;
      case "/":
        if (this.result) {
          this.operation = ev.target.name;
          this.firstNumber = this.result;
          this.twoNumber = "";
          this.result = "";
        } else {
          this.operation = ev.target.name;
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

  renderCalculator(firstRender) {
    const divButtons = document.createElement("div");
    const divCalculator = document.createElement("div");
    const divInput = document.createElement("div");

    divButtons.className = "buttons-array";
    divCalculator.className = "calculator";
    divInput.className = "input";

    let numberButton = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
      (item) => {
        const button = new Button(
          this.onClickButtonNumber,
          item,
          this.renderCalculator
        );

        return button.render();
      }
    );

    let operationButton = ["+", "-", "*", "/", "=", "AC"].map((item) => {
      const button = new Button(
        this.onClickButtonOperation,
        item,
        this.renderCalculator
      );

      return button.render();
    });

    numberButton.forEach((item) => {
      divButtons.appendChild(item);
    });

    operationButton.forEach((item) => {
      divButtons.appendChild(item);
    });
    if (!this.result && this.operation && this.twoNumber) {
      divInput.innerHTML = `${this.firstNumber} ${this.operation} ${this.twoNumber}`;
    } else if (!this.result && this.operation && this.twoNumber) {
      divInput.innerHTML = `${this.firstNumber} ${this.operation}`;
    } else if (this.result) {
      divInput.innerHTML = `${this.firstNumber} ${this.operation} ${this.twoNumber} = ${this.result}`;
    } else {
      divInput.innerHTML = this.firstNumber;
    }

    divCalculator.appendChild(divInput);
    divCalculator.appendChild(divButtons);

    if (firstRender) {
      return divCalculator;
    } else {
      ROOT_BODY.innerHTML = "";
      ROOT_BODY.appendChild(divCalculator);
    }
  }
}

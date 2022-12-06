import { box } from "./box";
import "./style.scss";

export class Button {
  constructor(onClickButton, value, operation) {
    this.onClickButton = onClickButton;
    this.value = value;
    this.operation = operation;
  }

  render() {
    const button = box.rendeDiv();

    button.addEventListener("click", () =>
      this.onClickButton(this.value, this.operation)
    );
    button.innerText = this.value;
    button.className = "button";

    return button;
  }
}

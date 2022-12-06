import "./style.scss";

export class Button {
  constructor(onClickButton, value, operation) {
    this.onClickButton = onClickButton;
    this.value = value;
    this.operation = operation;
  }

  render() {
    const button = document.createElement("button");

    button.addEventListener("click", () => this.onClickButton(this.value, this.operation)) ;
    button.innerText = this.value;
    button.className = "button";

    return button;
  }
}

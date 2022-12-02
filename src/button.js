import "./style.scss";

export class Button {
  constructor(onClickButton, text, renderDisplay) {
    this.onClickButton = onClickButton;
    this.text = text;
    this.renderDisplay = renderDisplay;
  }
  render() {
    const button = document.createElement("button");

    button.addEventListener("click", (ev) => {
      console.log(this);
      this.onClickButton(ev);

      this.renderDisplay(false);
    });
    button.name = this.text;
    button.innerText = this.text;
    button.className = "button";

    return button;
  }
}

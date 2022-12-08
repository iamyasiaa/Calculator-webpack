import "./style.scss";
export class Box {
  constructor(className) {
    this.className = className;
  }

  render() {
    const div = document.createElement("div");
    div.className = this.className;
    return div;
  }

  // renderElement() {
  //   const divCalculator = document.createElement("div");
  //   const divButtons = document.createElement("div");
  //   const divInput = document.createElement("div");
  //   return {
  //     divCalculator,
  //     divButtons,
  //     divInput,
  //   };
  // }
  // rendeDiv() {
  //   return document.createElement("div");
  // }
}
// export const box = new Box();
// export const element = box.renderElement();

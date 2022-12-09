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
 }


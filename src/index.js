// import "./style.scss";

// const ROOT_BODY = document.getElementById("body");

// class Button {
//   constructor(onClickButton, text) {
//     this.onClickButton = onClickButton;
//     this.text = text;
//   }
//   render() {
//     const button = document.createElement("button");

//     button.addEventListener("click", (ev) => {
//       this.onClickButton(ev);
//     });
//     button.name = this.text;
//     button.innerText = this.text;
//     button.className = "button";

//     return button;
//   }
// }

// class Display {
//   render() {
//     const calculator = new Calculator(this.render);
//     ROOT_BODY.innerHTML = "";
//     ROOT_BODY.appendChild(calculator.renderCalculator());
//   }
// }

// class Calculator {
//   constructor(renderDisplay, result, operation, twoNumber, firstNumber) {
//     this.renderDisplay = renderDisplay;
//     this.result = result;
//     this.operation = operation;
//     this.twoNumber = twoNumber;
//     this.firstNumber = firstNumber;
//   }

//   onClickButtonNumber(ev) {
//     if (!localStorage.getItem("result")) {
//       if (localStorage.getItem("operation")) {
//         const number = localStorage.getItem("twoNumber");
//         localStorage.setItem(
//           "twoNumber",
//           number ? number + ev.target.name : ev.target.name
//         );
//       } else {
//         const number = localStorage.getItem("firstNumber");
//         localStorage.setItem(
//           "firstNumber",
//           number ? number + ev.target.name : ev.target.name
//         );
//       }
//       const display = new Display();
//       display.render();
//     }
//   }

//   onClickButtonOperation(ev) {
//     switch (ev.target.name) {
//       case "+":
//         if (localStorage.getItem("result")) {
//           localStorage.setItem("operation", ev.target.name);
//           localStorage.setItem("firstNumber", localStorage.getItem("result"));
//           localStorage.removeItem("twoNumber");
//           localStorage.removeItem("result");
//         } else {
//           localStorage.setItem("operation", ev.target.name);
//         }

//         break;
//       case "-":
//         if (localStorage.getItem("result")) {
//           localStorage.setItem("operation", ev.target.name);
//           localStorage.setItem("firstNumber", localStorage.getItem("result"));
//           localStorage.removeItem("twoNumber");
//           localStorage.removeItem("result");
//         } else {
//           localStorage.setItem("operation", ev.target.name);
//         }
//         break;
//       case "*":
//         if (localStorage.getItem("result")) {
//           localStorage.setItem("operation", ev.target.name);
//           localStorage.setItem("firstNumber", localStorage.getItem("result"));
//           localStorage.removeItem("twoNumber");
//           localStorage.removeItem("result");
//         } else {
//           localStorage.setItem("operation", ev.target.name);
//         }
//         break;
//       case "/":
//         if (localStorage.getItem("result")) {
//           localStorage.setItem("operation", ev.target.name);
//           localStorage.setItem("firstNumber", localStorage.getItem("result"));
//           localStorage.removeItem("twoNumber");
//           localStorage.removeItem("result");
//         } else {
//           localStorage.setItem("operation", ev.target.name);
//         }
//         break;
//       case "=":
//         let result;
//         const first = localStorage.getItem("firstNumber");
//         const two = localStorage.getItem("twoNumber");
//         const operation = localStorage.getItem("operation");

//         if (first && two) {
//           if (operation === "+") {
//             result = +first + +two;
//           } else if (operation === "-") {
//             result = first - two;
//           } else if (operation === "*") {
//             result = +first * +two;
//           } else {
//             result = +first / +two;
//           }
//           localStorage.setItem("result", result);
//         }

//         break;
//       case "AC":
//         localStorage.clear();
//         break;
//     }
//     const display = new Display();
//     display.render();
//   }

//   renderCalculator() {
//     const divButtons = document.createElement("div");
//     const divCalculator = document.createElement("div");
//     const divInput = document.createElement("div");

//     divButtons.className = "buttons-array";
//     divCalculator.className = "calculator";
//     divInput.className = "input";

//     let numberButton = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
//       (item) => {
//         const button = new Button(
//           this.onClickButtonNumber,
//           item,
//           this.renderDisplay
//         );

//         return button.render();
//       }
//     );

//     let operationButton = ["+", "-", "*", "/", "=", "AC"].map((item) => {
//       const button = new Button(
//         this.onClickButtonOperation,
//         item,
//         this.renderDisplay
//       );

//       return button.render();
//     });

//     numberButton.forEach((item) => {
//       divButtons.appendChild(item);
//     });

//     operationButton.forEach((item) => {
//       divButtons.appendChild(item);
//     });
//     if (
//       !localStorage.getItem("result") &&
//       localStorage.getItem("operation") &&
//       localStorage.getItem("twoNumber")
//     ) {
//       divInput.innerHTML = `${localStorage.getItem(
//         "firstNumber"
//       )} ${localStorage.getItem("operation")} ${localStorage.getItem(
//         "twoNumber"
//       )}`;
//     } else if (
//       !localStorage.getItem("result") &&
//       localStorage.getItem("operation") &&
//       localStorage.getItem("firstNumber")
//     ) {
//       divInput.innerHTML = `${localStorage.getItem(
//         "firstNumber"
//       )} ${localStorage.getItem("operation")}`;
//     } else if (localStorage.getItem("result")) {
//       divInput.innerHTML = `${localStorage.getItem(
//         "firstNumber"
//       )} ${localStorage.getItem("operation")} ${localStorage.getItem(
//         "twoNumber"
//       )} = ${localStorage.getItem("result")}`;
//     } else {
//       divInput.innerHTML = localStorage.getItem("firstNumber");
//     }

//     divCalculator.appendChild(divInput);
//     divCalculator.appendChild(divButtons);

//     return divCalculator;
//   }
// }
// const display = new Display();
// display.render();

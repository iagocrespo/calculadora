const container = document.querySelector(".todo");

container.addEventListener("click", onClick);

let firstNumber = "";
let secondNumber = "";
let operator = "";

function onClick(evento) {
  const valor = evento.target;
  const escribir = document.querySelector(".result");
  if (evento.target.tagName === "BUTTON") {
    escribir.innerText = valor.innerText;
  }

  let character = evento.target.innerText;
  switch (character) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (
        operator !== "÷" &&
        operator !== "×" &&
        operator !== "−" &&
        operator !== "+"
      ) {
        firstNumber = firstNumber + character;
        escribir.innerText = firstNumber;
      } else {
        secondNumber = secondNumber + character;
        escribir.innerText = secondNumber;
      }
      break;

    case "C":
      firstNumber = "";
      secondNumber = "";
      operator = "0";
      escribir.innerText = "0";
      break;

    case "←":
      if (operator === "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        if (firstNumber === "") {
          escribir.innerText = "0";
        } else {
          escribir.innerText = firstNumber;
        }
      } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        if (secondNumber === "") {
          escribir.innerText = "0";
        } else {
          escribir.innerText = secondNumber;
        }
      }
      break;

    case "÷":
    case "×":
    case "−":
    case "+":
      operator = character;
      escribir.innerText = "";
      break;

    case "=":
      let resultado;
      if (operator === "+") {
        let resultado = parseInt(firstNumber) + parseInt(secondNumber);
        escribir.innerText = String(resultado);
        firstNumber = String(resultado);
      }

      if (operator === "−") {
        let resultado = parseInt(firstNumber) - parseInt(secondNumber);
        escribir.innerText = String(resultado);
        firstNumber = String(resultado);
      }

      if (operator === "×") {
        let resultado = parseInt(firstNumber) * parseInt(secondNumber);
        escribir.innerText = String(resultado);
        firstNumber = String(resultado);
      }

      if (operator === "÷") {
        let resultado = parseInt(firstNumber) / parseInt(secondNumber);
        escribir.innerText = String(resultado);
        firstNumber = String(resultado);
      }

      operator = "";
      secondNumber = "";
      break;
  }
}

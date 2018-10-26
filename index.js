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
        escribir.innerText = firstNumber;
      } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        escribir.innerText = secondNumber;
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
      if (operator === "+") {
        let resultSuma = parseInt(firstNumber) + parseInt(secondNumber);
        escribir.innerText = String(resultSuma);
        firstNumber = String(resultSuma);
      }

      if (operator === "−") {
        let resultResta = parseInt(firstNumber) - parseInt(secondNumber);
        escribir.innerText = String(resultResta);
        firstNumber = String(resultResta);
      }

      if (operator === "×") {
        let resultMultiplicacion =
          parseInt(firstNumber) * parseInt(secondNumber);
        escribir.innerText = String(resultMultiplicacion);
        firstNumber = String(resultMultiplicacion);
      }

      if (operator === "÷") {
        let resultDivision = parseInt(firstNumber) / parseInt(secondNumber);
        escribir.innerText = String(resultDivision);
        firstNumber = String(resultDivision);
      }

      operator = "";
      secondNumber = "";
      break;
  }
}

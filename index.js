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
      firstNumber = firstNumber + character;
      escribir.innerText = firstNumber;
      break;

    case "C":
      firstNumber = "";
      escribir.innerText = "0";
      break;

    case "←":
      escribir.innerText = "";
      break;

    case "÷":
      escribir.innerText = "";
      break;

    case "×":
      escribir.innerText = "";
      break;

    case "−":
      escribir.innerText = "";
      break;

    case "+":
      escribir.innerText = "";
      break;

    case "=":
      escribir.innerText = "";
      break;
  }
}

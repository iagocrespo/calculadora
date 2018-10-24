const container = document.querySelector(".todo");

container.addEventListener("click", onClick);


function onClick(evento) {
  const valor = evento.target;
  const escribir = document.querySelector(".result");
  if (evento.target.tagName === "BUTTON") {
    escribir.innerText = valor.innerText;
  }

  let characters = evento.target.innerText;
  switch (characters) {
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
      escribir.innerText = valor.innerText;
      break;

    case "C":
      escribir.innerText = "0"
      break;

    case "←":
      escribir.innerText = ""
      break;

    case "÷":
    escribir.innerText = ""
      break;

    case "×":
    escribir.innerText = ""
      break;

    case "−":
      escribir.innerText = ""
      break;

    case "+":
      escribir.innerText = ""
      break;

    case "=":
      escribir.innerText = ""
      break;
  }
}
const container = document.querySelector(".todo");

container.addEventListener("click", onClick);


function onClick(evento) {
  const valor = evento.target;
  const escribir = document.querySelector(".result");
  if (evento.target.tagName === "BUTTON") {
    escribir.innerText = valor.innerText;
  }
}
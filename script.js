let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");
let body = document.getElementById("body");
let titulo = document.getElementById("titulo");
let input = document.getElementById("input");

function temaClaro() {
  body.style.backgroundColor = "#ffff";
  body.style.color = "black";
}

function temaEscuro() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}

function adicionar(){
    titulo.innerHTML = input.value 

    input.value = ""
}

// Declaracion de variables
const buttonHtml = document.getElementById("buttonHtml");
const buttonCss = document.getElementById("buttonCss")
let parrafo1 = document.getElementById("parrafo1").style.display = "none";
let parrafo2 = document.getElementById("parrafo2").style.display = "none";

// Declaracion de funciones
function ParrafoH() {
    if (document.getElementById("parrafo1").style.display === "none") {
        document.getElementById("parrafo1").style.display = "block";
    }else{
        document.getElementById("parrafo1").style.display = "none";
    }
}

function ParrafoC() {
    if (document.getElementById("parrafo2").style.display === "none") {
        document.getElementById("parrafo2").style.display = "block";
    }else{
        document.getElementById("parrafo2").style.display = "none";
    }
}

// Eventos on click
buttonHtml.onclick = function () {
  ParrafoH();
};

buttonCss.onclick = function () {
    ParrafoC();
  };
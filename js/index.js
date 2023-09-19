// Declaracion de variables
const buttonHtml = document.getElementById("buttonHtml");
const buttonCss = document.getElementById("buttonCss")

// Declaracion de funciones
function RedireccionHtml() {
    window.location.href="./infoHtml.html"
}

function RedireccionCss() {
    window.location.href="./indexcss.html"
}

// Eventos on click
buttonHtml.onclick = function () {
    RedireccionHtml();
};

buttonCss.onclick = function () {
    RedireccionCss();
  };

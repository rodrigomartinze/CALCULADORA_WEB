let pantalla = document.getElementById("pantalla");

function agregar(valor) {
  pantalla.value += valor;
}

function cambiarSigno() {
  if (pantalla.value.charAt(0) === "-")
    pantalla.value = pantalla.value.slice(1)
  
  else if (pantalla.value.charAt(0) != "-")
    pantalla.value = "-" + pantalla.value
}

function vaciar(){
  pantalla.value = "";
}

function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (e) {
    pantalla.value = "Error";
  }
}

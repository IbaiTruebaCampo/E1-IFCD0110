let miNombre = prompt("Introduzca su nombre y apellido, por ejemplo Pepito Grillo.");
  // Mostrará la alerta y despues lo mostrara en pantalla.
if (miNombre === "Pepito Grillo") {
  alert("Buenos días, veo que realmente eres " + miNombre + ".");
  document.getElementById("nombre").innerHTML = ("Buenos días, veo que realmente eres " + miNombre + ".");
} else {
  alert("Buenos días " + miNombre + ".");
  document.getElementById("nombre").innerHTML = ("Buenos días " + miNombre + ".");
}

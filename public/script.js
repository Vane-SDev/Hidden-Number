// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDL88uMiZkpqJL9bwdDuaI6oxOepqQPRIY",
  authDomain: "adivinanza-juego0001-e2791.firebaseapp.com",
  projectId: "adivinanza-juego0001-e2791",
  storageBucket: "adivinanza-juego0001-e2791.appspot.com",
  messagingSenderId: "550302223646",
  appId: "1:550302223646:web:448889dc14d0034053cd0f",
  measurementId: "G-T8SE282N8B",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Importa la configuración de Firebase
// import "../firebase_config.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // Seleccionamos un número al azar
  let numAzar = Math.floor(Math.random() * 100) + 1;

  let numeroEntrada = document.getElementById("numeroEntrada");
  let mensaje = document.getElementById("mensaje");
  let intento = document.getElementById("intento");
  let mensajeContainer = document.getElementById("mensajeContainer");
  let resetButton = document.getElementById("resetButton");
  let checkButton = document.getElementById("checkButton"); // Asegúrate de tener un ID para el botón de comprobar

  mensajeContainer.style.display = "none";

  let intentos = 0;
  let juegoTerminado = false; // Agregamos una variable para controlar si el juego ya terminó

  // Función para reiniciar el juego
  function reiniciarJuego() {
    numAzar = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    juegoTerminado = false;
    mensajeContainer.style.display = "none";
    numeroEntrada.value = "";
    numeroEntrada.disabled = false;
    intento.textContent = "0";
  }

  // se ejecuta al presionar el botón
  function chequearResultado() {
    if (juegoTerminado) {
      return; // Evita que se siga ejecutando después de terminar el juego
    }

    let numeroIngresado = parseInt(numeroEntrada.value);

    if (
      isNaN(numeroIngresado) ||
      numeroIngresado < 1 ||
      numeroIngresado > 100
    ) {
      mensaje.textContent = "Por favor ingresa un número válido del 1 al 100";
      mensaje.style.color = "black";
      return;
    }

    intentos++;
    intento.textContent = intentos;

    if (numeroIngresado === numAzar) {
      mensaje.textContent =
        "¡Felicitaciones, acertaste el número con un total de " +
        intentos +
        " intentos!";
      mensaje.style.color = "green";
      numeroEntrada.disabled = true;
      mensajeContainer.style.display = "block";
      juegoTerminado = true; // Marca el juego como terminado
    } else if (numeroIngresado < numAzar) {
      mensaje.textContent =
        "El número que elegiste es menor al número que debes adivinar";
      mensaje.style.color = "red";
    } else if (numeroIngresado > numAzar) {
      mensaje.textContent =
        "Más bajo, tu número es mayor al que debes adivinar";
    }

    if (intentos === 10) {
      mensaje.textContent = "Alcanzaste el número de intentos permitidos";
      mensajeContainer.style.display = "block";
      juegoTerminado = true; // Marca el juego como terminado
    }
  }

  // Asignamos las funciones a los eventos de clic
  resetButton.addEventListener("click", reiniciarJuego);
  checkButton.addEventListener("click", chequearResultado);
});

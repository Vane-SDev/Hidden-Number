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

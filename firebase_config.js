// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL88uMiZkpqJL9bwdDuaI6oxOepqQPRIY",
  authDomain: "adivinanza-juego0001-e2791.firebaseapp.com",
  projectId: "adivinanza-juego0001-e2791",
  storageBucket: "adivinanza-juego0001-e2791.appspot.com",
  messagingSenderId: "550302223646",
  appId: "1:550302223646:web:448889dc14d0034053cd0f",
  measurementId: "G-T8SE282N8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
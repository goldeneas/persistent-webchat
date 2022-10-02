// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBojR8-8RrSg2AeIovKdYG9ezJ4cpp1C84",
  authDomain: "astro-webchat.firebaseapp.com",
  projectId: "astro-webchat",
  storageBucket: "astro-webchat.appspot.com",
  messagingSenderId: "1089832679293",
  appId: "1:1089832679293:web:4d767dc27d63b9486dfe14",
  measurementId: "G-1VYMSX9W0K"
}

// TODO: Fix unsafe firebase config (shows in sources of developer console in google chrome)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
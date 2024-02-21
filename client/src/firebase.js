// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8c18c.firebaseapp.com",
  projectId: "mern-estate-8c18c",
  storageBucket: "mern-estate-8c18c.appspot.com",
  messagingSenderId: "614978538404",
  appId: "1:614978538404:web:ac3c15e53614d41081cf31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

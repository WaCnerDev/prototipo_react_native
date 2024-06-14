// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQGfkkzN6nW-oYn3P8LJtlwaoFjudMvE",
  authDomain: "prototipo-react-native.firebaseapp.com",
  projectId: "prototipo-react-native",
  storageBucket: "prototipo-react-native.appspot.com",
  messagingSenderId: "149311374017",
  appId: "1:149311374017:web:d74675bbd51e7e9221ca40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
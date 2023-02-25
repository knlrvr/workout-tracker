// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbIT50jx4_1wVlcW1JzipMyHMMw5La18o",
  authDomain: "workout-tracker-cd97a.firebaseapp.com",
  projectId: "workout-tracker-cd97a",
  storageBucket: "workout-tracker-cd97a.appspot.com",
  messagingSenderId: "286378129377",
  appId: "1:286378129377:web:4afed1d04ed07e9e4cc4a0",
  measurementId: "G-473TDCYRQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBQ5aWG5ffyW1X37t6V_sRFP8K-YhjD0ds",
  authDomain: "fir-f0ab4.firebaseapp.com",
  databaseURL: "https://fir-f0ab4-default-rtdb.firebaseio.com",
  projectId: "fir-f0ab4",
  storageBucket: "fir-f0ab4.appspot.com",
  messagingSenderId: "752667336302",
  appId: "1:752667336302:web:a4cd9e2963b59ffeb0507f",
  measurementId: "G-BNF94S4XYS"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider,firebase };
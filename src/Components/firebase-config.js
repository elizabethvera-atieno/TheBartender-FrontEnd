import { initializeApp } from "firebase/app";
import{getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkoick0zchN7Tt13iZGVvUPelSfmtPrlc",
  authDomain: "cocktail-uspace.firebaseapp.com",
  projectId: "cocktail-uspace",
  storageBucket: "cocktail-uspace.appspot.com",
  messagingSenderId: "575753682261",
  appId: "1:575753682261:web:c86cfb93feddda6cf983dc",
  measurementId: "G-LNGZSFSL79"
};

const app = initializeApp( firebaseConfig)

export const auth = getAuth(app)
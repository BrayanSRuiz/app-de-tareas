// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOoU24q_OGTt-ff49eZhbQIsCFv92rN1A",
  authDomain: "login-37126.firebaseapp.com",
  projectId: "login-37126",
  storageBucket: "login-37126.appspot.com",
  messagingSenderId: "830796387994",
  appId: "1:830796387994:web:5069358d2b2e17dbb67123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app)
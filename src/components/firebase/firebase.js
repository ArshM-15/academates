// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJcUN5pL6EAICpLM-fi6d8P5YtUlyUsc",
  authDomain: "academates-8e220.firebaseapp.com",
  projectId: "academates-8e220",
  storageBucket: "academates-8e220.appspot.com",
  messagingSenderId: "899234820055",
  appId: "1:899234820055:web:746ae5838c975e27ce6592",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

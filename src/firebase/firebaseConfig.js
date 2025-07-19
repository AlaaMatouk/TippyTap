// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvMa3OaF2vj5ai91MriIlrEotxBxmN3oY",
  authDomain: "tippy-tap-c885d.firebaseapp.com",
  projectId: "tippy-tap-c885d",
  storageBucket: "tippy-tap-c885d.firebasestorage.app",
  messagingSenderId: "250493289120",
  appId: "1:250493289120:web:c405e27fe98950c050bfc5",
  measurementId: "G-D27WBJQZQT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

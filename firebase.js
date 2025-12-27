// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWgxOhlWgXMaOSsX8TtSYFYcfllkwj3Jc",
  authDomain: "favoflex-ecommerce.firebaseapp.com",
  projectId: "favoflex-ecommerce",
  storageBucket: "favoflex-ecommerce.firebasestorage.app",
  messagingSenderId: "471026384406",
  appId: "1:471026384406:web:3f3b22373d841504c63f37"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  sendPasswordResetEmail
};

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginlms-3a36e.firebaseapp.com",
  projectId: "loginlms-3a36e",
  storageBucket: "loginlms-3a36e.firebasestorage.app",
  messagingSenderId: "1053241620612",
  appId: "1:1053241620612:web:bca7e6bbd7cf2bf8f1ead1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
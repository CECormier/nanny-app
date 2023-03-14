// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDylqOgFTPfuoyst3cqwJFH6-RVzsHIm8A",
  authDomain: "login-with-firebase-data-12716.firebaseapp.com",
  projectId: "login-with-firebase-data-12716",
  storageBucket: "login-with-firebase-data-12716.appspot.com",
  messagingSenderId: "329691418629",
  appId: "1:329691418629:web:3142d5cb522e8070e98c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
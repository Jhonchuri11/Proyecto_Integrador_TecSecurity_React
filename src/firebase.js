import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3e9DQl7rLkNF0iTyQGWsK7oXL0MSorUo",
  authDomain: "tsecurity-7a13c.firebaseapp.com",
  projectId: "tsecurity-7a13c",
  storageBucket: "tsecurity-7a13c.appspot.com",
  messagingSenderId: "181464164712",
  appId: "1:181464164712:web:b47c0c90d10bb24eaa4edd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

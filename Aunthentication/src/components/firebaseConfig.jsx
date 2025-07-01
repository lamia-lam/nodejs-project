// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGFkoAd8wJ0b8Z9HXyEpSfJJ4pDanY73M",
  authDomain: "curdapp-770ca.firebaseapp.com",
  projectId: "curdapp-770ca",
  storageBucket: "curdapp-770ca.firebasestorage.app",
  messagingSenderId: "958126802850",
  appId: "1:958126802850:web:a1694046b1bb92016514fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

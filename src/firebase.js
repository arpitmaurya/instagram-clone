// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjG65SSHFLEYcQtJzqFKw-eHFonzgBhbc',
  authDomain: 'arpitmaurya-instagram.firebaseapp.com',
  projectId: 'arpitmaurya-instagram',
  storageBucket: 'arpitmaurya-instagram.appspot.com',
  messagingSenderId: '418574283850',
  appId: '1:418574283850:web:466776ac616defba92a2b3',
  measurementId: 'G-E64SN512CJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;

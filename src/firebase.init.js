// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD19ByxIu3S4I74i9ay8NsQQX5AgKV5fts",
  authDomain: "ama-john-b9f04.firebaseapp.com",
  projectId: "ama-john-b9f04",
  storageBucket: "ama-john-b9f04.appspot.com",
  messagingSenderId: "197410864020",
  appId: "1:197410864020:web:73a4ccf171395cfc02ad81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
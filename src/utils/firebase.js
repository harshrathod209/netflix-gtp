// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhDwh4LPNXCbYUsjCKlfF-5a-UIuhH0dI",
  authDomain: "netflixgpt-2812a.firebaseapp.com",
  projectId: "netflixgpt-2812a",
  storageBucket: "netflixgpt-2812a.firebasestorage.app",
  messagingSenderId: "69531339867",
  appId: "1:69531339867:web:5f09a9bd063e4fb0f4037e",
  measurementId: "G-ERZ5CX7QSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();

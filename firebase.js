// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zJECrNWRtZBi8lPMNwkJ2iv0Jv8fhrM",
  authDomain: "twitter-clone-ab20c.firebaseapp.com",
  projectId: "twitter-clone-ab20c",
  storageBucket: "twitter-clone-ab20c.appspot.com",
  messagingSenderId: "201926219631",
  appId: "1:201926219631:web:209c3cc1071ddd24cfba9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
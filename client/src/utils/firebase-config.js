// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaAFGI6GkmLIfyW0z230mgXNiMbpPu5WE",
    authDomain: "instagram-clone-c1bbb.firebaseapp.com",
    projectId: "instagram-clone-c1bbb",
    storageBucket: "instagram-clone-c1bbb.appspot.com",
    messagingSenderId: "753471546057",
    appId: "1:753471546057:web:16b731ecf5641bfa37e318",
    measurementId: "G-GTE50LKZ06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

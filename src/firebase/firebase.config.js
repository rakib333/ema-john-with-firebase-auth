// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRS38ylASOOaliBUTW5bDpxNNwfjVp_ZI",
    authDomain: "ema-john-with-firebase-a-65a1e.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-65a1e",
    storageBucket: "ema-john-with-firebase-a-65a1e.appspot.com",
    messagingSenderId: "710580581384",
    appId: "1:710580581384:web:2fb78edb8df44865570dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
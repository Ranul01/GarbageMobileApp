// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "reactnative-603c4.firebaseapp.com",
    projectId: "reactnative-603c4",
    storageBucket: "reactnative-603c4.appspot.com",
    messagingSenderId: "1019095881653",
    appId: "1:1019095881653:web:8e9a26dbc60485208bebfc",
    measurementId: "G-00B6YDJJ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);
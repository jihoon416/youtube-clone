import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCtQd4eDUp9TIojQaB3v7i6NW_51LH6sw",
    authDomain: "clone-coding-6324d.firebaseapp.com",
    projectId: "clone-coding-6324d",
    storageBucket: "clone-coding-6324d.appspot.com",
    messagingSenderId: "588873201479",
    appId: "1:588873201479:web:14390ba0c60aa8ed91be62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

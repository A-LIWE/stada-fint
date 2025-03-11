import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmmVkVJy_9TD6afwM0p92z5x-V-TsxjKQ",
    authDomain: "stada-fint-f2b03.firebaseapp.com",
    projectId: "stada-fint-f2b03",
    storageBucket: "stada-fint-f2b03.appspot.com",
    messagingSenderId: "174476675706",
    appId: "1:174476675706:web:dd290ebeb757b751d049c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
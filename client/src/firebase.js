// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2d2d2.firebaseapp.com",
  projectId: "mern-estate-2d2d2",
  storageBucket: "mern-estate-2d2d2.appspot.com",
  messagingSenderId: "800346541464",
  appId: "1:800346541464:web:3dd5d17c46820a1727efed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

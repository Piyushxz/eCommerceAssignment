import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8GpOjxS8weyQRrYefvzyOXR8rHmyCFtE",
    authDomain: "ecommerce-a9b5e.firebaseapp.com",
    databaseURL: "https://ecommerce-a9b5e-default-rtdb.firebaseio.com",
    projectId: "ecommerce-a9b5e",
    storageBucket: "ecommerce-a9b5e.firebasestorage.app",
    messagingSenderId: "510614618094",
    appId: "1:510614618094:web:a9574ca506e6d90f73d8ff",
    measurementId: "G-X6ZHDWCRQT"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword ,signInWithEmailAndPassword };

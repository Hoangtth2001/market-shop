// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAHRyTS-DF7gMm3P9ekfz6yexkjBnVDNro",
  authDomain: "ecommerce-app-9148c.firebaseapp.com",
  projectId: "ecommerce-app-9148c",
  storageBucket: "ecommerce-app-9148c.appspot.com",
  messagingSenderId: "194553348285",
  appId: "1:194553348285:web:3dc9ccf61698aa0d3037d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage   = getStorage(app)
export default app;

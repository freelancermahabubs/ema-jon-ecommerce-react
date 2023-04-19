// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUv2muT8wABQRrMM0dkghZvtl8hWzub_4",
  authDomain: "ema-jon-ecommerce-react.firebaseapp.com",
  projectId: "ema-jon-ecommerce-react",
  storageBucket: "ema-jon-ecommerce-react.appspot.com",
  messagingSenderId: "81548826755",
  appId: "1:81548826755:web:469fc8475d8986b28e23b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJKi_DWRdQC-UKKsBy6i-LVlw6FHiOecs",
  authDomain: "refrain-addiction.firebaseapp.com",
  projectId: "refrain-addiction",
  storageBucket: "refrain-addiction.appspot.com",
  messagingSenderId: "72194954897",
  appId: "1:72194954897:web:ce44b4665016777124d130"
};

// Initialize Firebase
export const initalizeFirebaseAuth = () => initializeApp(firebaseConfig);

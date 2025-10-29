// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClk5HiCHpkEoxPoQLRKodbRY_iCZzwEpE",
  authDomain: "trip-planner-7b1e6.firebaseapp.com",
  projectId: "trip-planner-7b1e6",
  storageBucket: "trip-planner-7b1e6.firebasestorage.app",
  messagingSenderId: "707565487867",
  appId: "1:707565487867:web:fc94053496f70c7703525e",
  measurementId: "G-XNTS31ZB3H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhMR0siyUpnKuCoDIAqGuSB3glnnVHVlY",
  authDomain: "twitify-1.firebaseapp.com",
  projectId: "twitify-1",
  storageBucket: "twitify-1.firebasestorage.app",
  messagingSenderId: "752140637614",
  appId: "1:752140637614:web:fc6a9e077c432c1f19e43f",
  measurementId: "G-E32K09SFNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);

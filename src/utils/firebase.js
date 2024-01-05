// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuST5ZNkc9ieMJpigL-mneIa-93rNUHAM",
  authDomain: "napp-3d731.firebaseapp.com",
  projectId: "napp-3d731",
  storageBucket: "napp-3d731.appspot.com",
  messagingSenderId: "392953021404",
  appId: "1:392953021404:web:78d71ce41a31cb19c00519",
  measurementId: "G-50SVSLEHY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
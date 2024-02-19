// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSVogQYU-R3qak2aX05jloxnUgfY0Zy0g",
  authDomain: "myapp-71c71.firebaseapp.com",
  projectId: "myapp-71c71",
  storageBucket: "myapp-71c71.appspot.com",
  messagingSenderId: "267977351442",
  appId: "1:267977351442:web:89c20aa87b46a42930d3cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNUQSnoBS3NZ0rOeOXFOPPleJ8Q2pfWdU",
  authDomain: "fitness-care-a83c9.firebaseapp.com",
  projectId: "fitness-care-a83c9",
  storageBucket: "fitness-care-a83c9.appspot.com",
  messagingSenderId: "244313280",
  appId: "1:244313280:web:3c709146728de0a8c29125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

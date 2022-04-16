// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5bBINLbkQ2mUZewPid35U5X6I0PQTjZ4",
  authDomain: "simple-firebase-project-2ad16.firebaseapp.com",
  projectId: "simple-firebase-project-2ad16",
  storageBucket: "simple-firebase-project-2ad16.appspot.com",
  messagingSenderId: "919140574170",
  appId: "1:919140574170:web:35f0d71514418236a656e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

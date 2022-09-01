import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx07KrsbRdjvklYBo1XVu3lyNvGwcVzKg",
  authDomain: "react-slack-4db50.firebaseapp.com",
  projectId: "react-slack-4db50",
  storageBucket: "react-slack-4db50.appspot.com",
  messagingSenderId: "478204599324",
  appId: "1:478204599324:web:c3d56285658ae9f2d993d9",
  measurementId: "G-JYD7L22BL5",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

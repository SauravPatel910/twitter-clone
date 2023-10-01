import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrWSdbe2ZBtl3inwinVhiR813GkBR5byM",
  authDomain: "x-clone-fd2e4.firebaseapp.com",
  projectId: "x-clone-fd2e4",
  storageBucket: "x-clone-fd2e4.appspot.com",
  messagingSenderId: "417551481394",
  appId: "1:417551481394:web:aa92e60741ebbec2075a2b",
  measurementId: "G-SLTZ0ZSBNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// console.log(db);

export default db;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADbP8Qq5PxFbdBvAZGDg8cteWlkh6-IxA",
  authDomain: "fir-firestore-practice-d6b44.firebaseapp.com",
  projectId: "fir-firestore-practice-d6b44",
  storageBucket: "fir-firestore-practice-d6b44.appspot.com",
  messagingSenderId: "683718631205",
  appId: "1:683718631205:web:369db022343d118c4484cc",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAs7Cp7bGTkNDdaawGCdDVRD-4t5sLJptQ",
  authDomain: "miniblog-b9d3c.firebaseapp.com",
  projectId: "miniblog-b9d3c",
  storageBucket: "miniblog-b9d3c.appspot.com",
  messagingSenderId: "295713547604",
  appId: "1:295713547604:web:6b9ef2f352b23b048094c1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
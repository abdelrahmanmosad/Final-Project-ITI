import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyXdADZdogjf427rFkfmEpsPSsio0kMDg",
  authDomain: "firstproject-d0b55.firebaseapp.com",
  databaseURL: "https://firstproject-d0b55-default-rtdb.firebaseio.com",
  projectId: "firstproject-d0b55",
  storageBucket: "firstproject-d0b55.appspot.com",
  messagingSenderId: "744125262261",
  appId: "1:744125262261:web:0c9dbddc69ba4c3b5591fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);



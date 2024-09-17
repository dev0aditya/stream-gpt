import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_g634y9sI2oF6cDM9grC7o_paZz9WNzM",
  authDomain: "stream-80f4a.firebaseapp.com",
  projectId: "stream-80f4a",
  storageBucket: "stream-80f4a.appspot.com",
  messagingSenderId: "530049818631",
  appId: "1:530049818631:web:e856562e1c2a0773700aa2",
  measurementId: "G-SMHZ7K3QPK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e4bbd.firebaseapp.com",
  projectId: "reactchat-e4bbd",
  storageBucket: "reactchat-e4bbd.appspot.com",
  messagingSenderId: "27579934201",
  appId: "1:27579934201:web:33f41c7ae1cb17963b8928",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();

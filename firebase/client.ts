
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwza8Pw2sblNg2ViUl-BxPOVhwFfUuT-I",
  authDomain: "prepwise-f28d1.firebaseapp.com",
  projectId: "prepwise-f28d1",
  storageBucket: "prepwise-f28d1.firebasestorage.app",
  messagingSenderId: "294006253048",
  appId: "1:294006253048:web:8ee49e64be3ef0f103e20d",
  measurementId: "G-GEKHT6HWKQ"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)

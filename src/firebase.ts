import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRVWcEKDbsGQmAxHxxb40s8ws90ddPtaw",
  authDomain: "petit-act.firebaseapp.com",
  projectId: "petit-act",
  storageBucket: "petit-act.firebasestorage.app",
  messagingSenderId: "650169005501",
  appId: "1:650169005501:web:8d1e512265f89c0e9dced4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
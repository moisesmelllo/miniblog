import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoYee1LYJluOUCeq4S_04I8LeTkTELx6M",
  authDomain: "miniblog-31512.firebaseapp.com",
  projectId: "miniblog-31512",
  storageBucket: "miniblog-31512.appspot.com",
  messagingSenderId: "561720729898",
  appId: "1:561720729898:web:b5db441362067c8ecf3e53"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
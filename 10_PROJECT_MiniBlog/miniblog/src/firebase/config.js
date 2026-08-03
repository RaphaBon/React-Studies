import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDEx4PAi-YHsn1NePhDg79r229uYRjtkfE",
  authDomain: "miniblog-c97e0.firebaseapp.com",
  projectId: "miniblog-c97e0",
  storageBucket: "miniblog-c97e0.firebasestorage.app",
  messagingSenderId: "1008399256371",
  appId: "1:1008399256371:web:878efc38106741e9514c46"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db, app}
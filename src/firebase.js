import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV7jF7euKVs41QIUwVrOMMnEiLaG8VihE",
  authDomain: "chat-app-e801e.firebaseapp.com",
  projectId: "chat-app-e801e",
  storageBucket: "chat-app-e801e.appspot.com",
  messagingSenderId: "287881183574",
  appId: "1:287881183574:web:1cceb71fb5be5723ab56f7",
  measurementId: "G-X385K7JY3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const provider=new GoogleAuthProvider();

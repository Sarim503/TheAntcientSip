import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyD3zK6zFc37Zv5vml246VgeAIYBr6fc-W0",
  authDomain: "antcient-sip.firebaseapp.com",
  projectId: "antcient-sip",
  storageBucket: "antcient-sip.firebasestorage.app",
  messagingSenderId: "459420388155",
  appId: "1:459420388155:web:9ff19f34ddf8f0ded2451e"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app); 

auth.languageCode = 'en';  

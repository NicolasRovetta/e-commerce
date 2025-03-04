import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ie-commerce.firebaseapp.com",
  projectId: "ie-commerce",
  storageBucket: "ie-commerce.firebasestorage.app",
  messagingSenderId: "581285012422",
  appId: "1:581285012422:web:c95b05b6cfbcc6a99f08c7"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, 
  authDomain: "ie-commerce.firebaseapp.com",
  projectId: "ie-commerce",
  storageBucket: "ie-commerce.firebasestorage.app",
  messagingSenderId: "581285012422",
  appId: "1:581285012422:web:3519ce4ac5b986a09f08c7"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
);
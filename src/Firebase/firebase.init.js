
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGQiGUxMFKlcZjvwUhIVTZuvMP9TxgefE",
  authDomain: "chill-gamer-review-app.firebaseapp.com",
  projectId: "chill-gamer-review-app",
  storageBucket: "chill-gamer-review-app.firebasestorage.app",
  messagingSenderId: "589195081121",
  appId: "1:589195081121:web:3ac98e0144e3436f58c7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

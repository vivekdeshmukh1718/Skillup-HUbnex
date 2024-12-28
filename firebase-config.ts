// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics"; // Import Firebase Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFVLuKiJ43qzABBKgYLfWJ13w38owR1NU",
  authDomain: "skill-up-c4d5a.firebaseapp.com",
  projectId: "skill-up-c4d5a",
  storageBucket: "skill-up-c4d5a.firebasestorage.app",
  messagingSenderId: "983497299161",
  appId: "1:983497299161:web:94ac50b8e8f4db77aa5ac8",
  measurementId: "G-6T8G45M25Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore
const analytics = getAnalytics(app); // Firebase Analytics

// Export app, auth, db, and analytics for use in other files
export { app, auth, db, analytics };

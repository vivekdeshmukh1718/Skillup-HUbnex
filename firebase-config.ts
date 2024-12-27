// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBevOIG1XOv69BOtEmSOG4AUTpiOzjy-ys",
  authDomain: "skillup-591b5.firebaseapp.com",
  projectId: "skillup-591b5",
  storageBucket: "skillup-591b5.firebasestorage.app",
  messagingSenderId: "64329385017",
  appId: "1:64329385017:web:d49f30363e416a454a79e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore (if needed for other features)

// Export app, auth, and db for use in other files
export { app, auth, db };

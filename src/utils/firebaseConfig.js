import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiHVBAJkG1OhW0PHPhjvj5sXYtiB5XCXk",
  authDomain: "collaborative-story-eb995.firebaseapp.com",
  projectId: "collaborative-story-eb995",
  storageBucket: "collaborative-story-eb995.appspot.com",
  messagingSenderId: "539556909415",
  appId: "1:539556909415:web:26e8e6a3fb2e7603a65fc2",
  measurementId: "G-GP87TZ82ML"
};

const app = initializeApp(firebaseConfig);
//export const db = getDatabase(app);
export const db = getFirestore(app);

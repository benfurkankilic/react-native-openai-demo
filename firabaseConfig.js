import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMWkh49X0JK10S1oMVw-yT5w2BG4XMqVw",
  authDomain: "reactnativewithopenaidemov1.firebaseapp.com",
  projectId: "reactnativewithopenaidemov1",
  storageBucket: "reactnativewithopenaidemov1.appspot.com",
  messagingSenderId: "990967664311",
  appId: "1:990967664311:web:9bf4ab5642b84429f1c732",
  measurementId: "G-36E2K42PTE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

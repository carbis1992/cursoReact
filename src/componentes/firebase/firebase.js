// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpL-yQlDn6O4d_3HyxsOHjbEAJKq-iVdI",
  authDomain: "deco-home-b9f06.firebaseapp.com",
  projectId: "deco-home-b9f06",
  storageBucket: "deco-home-b9f06.appspot.com",
  messagingSenderId: "663105836134",
  appId: "1:663105836134:web:12a363a58da6c980ac09a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
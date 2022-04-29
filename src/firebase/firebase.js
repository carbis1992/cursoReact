import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpL-yQlDn6O4d_3HyxsOHjbEAJKq-iVdI",
  authDomain: "deco-home-b9f06.firebaseapp.com",
  projectId: "deco-home-b9f06",
  storageBucket: "deco-home-b9f06.appspot.com",
  messagingSenderId: "663105836134",
  appId: "1:663105836134:web:12a363a58da6c980ac09a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
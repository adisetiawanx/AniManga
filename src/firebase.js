import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHteGU69SawzlagedpMcMktIDBpcaG0S8",
  authDomain: "adisetiawanx-animanga.firebaseapp.com",
  projectId: "adisetiawanx-animanga",
  storageBucket: "adisetiawanx-animanga.appspot.com",
  messagingSenderId: "803060955065",
  appId: "1:803060955065:web:6fb2047efea9b0385f6868",
  measurementId: "G-07TSGZXJ7C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

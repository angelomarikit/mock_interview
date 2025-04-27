
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmGJB1Ri_oYEwqEBoWi4Ph5lJ83pUClFc",
  authDomain: "mockwise-dc678.firebaseapp.com",
  projectId: "mockwise-dc678",
  storageBucket: "mockwise-dc678.firebasestorage.app",
  messagingSenderId: "751930029678",
  appId: "1:751930029678:web:8d276912bc9083b8c7587f",
  measurementId: "G-MLXLHXC6HD"
};


const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
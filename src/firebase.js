import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTsx9ErqAEDMVOCs8sgCBGSAJ-I7tC1K8",
  authDomain: "react-portfolio-dashboar-ba5a4.firebaseapp.com",
  projectId: "react-portfolio-dashboar-ba5a4",
  storageBucket: "react-portfolio-dashboar-ba5a4.appspot.com",
  messagingSenderId: "699155738090",
  appId: "1:699155738090:web:be54f4bb7e80d520871693"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
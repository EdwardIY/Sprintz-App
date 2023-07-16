import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut} from "firebase/auth";
import {useState} from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyAvMfJmvZqvJxD2gnnBp9be1oBoIJcH2n4",
  authDomain: "sprintz-c3650.firebaseapp.com",
  projectId: "sprintz-c3650",
  storageBucket: "sprintz-c3650.appspot.com",
  messagingSenderId: "952927412377",
  appId: "1:952927412377:web:ef3134c2af80948d6f5808",
  measurementId: "G-VH834ZMKTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// FIREBASE AUTH
export const auth = getAuth(app);
export const signIn_Option1 = signInWithEmailAndPassword
export const createUser = createUserWithEmailAndPassword
export const customizeProfile = updateProfile
export const checkIfSignedIn = onAuthStateChanged
export const signOutUser = signOut
// Sign in with Google
export const provider = new GoogleAuthProvider();
export const signIn_Option2 = signInWithPopup
export const signIn_Option2_mobile = signInWithRedirect




// module.exports = {
//   auth,
//   onAuthStateChanged
// }

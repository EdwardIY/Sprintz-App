import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from "firebase/auth";


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

// All firebase features used
export const auth = getAuth(app);
export const signIn_Option1 = signInWithEmailAndPassword
export const createUser_Option1 = createUserWithEmailAndPassword
export const customizeProfile = updateProfile
export const checkIfSignedIn = onAuthStateChanged


// module.exports = {
//   auth,
//   onAuthStateChanged
// }

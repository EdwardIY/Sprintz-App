import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,getDocs,setDoc,doc } from "firebase/firestore"; 


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


// Firestore
export const db = getFirestore(app)
export const writeToDatabase = setDoc

// Initialize database for new user
export function createDatabase(user) {
  try {
    writeToDatabase(doc(db, "Users", user.email), {
      username: user.displayName,
      todaysTasks: [],
      sprints: [],
      history: [],
      completed: 0,
      missed: 0,
    
  });
    console.log('Database created')
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

// 
export async function getUser(currentUser) {
  const querySnapshot = await getDocs(collection(db, "Users"));
  let user

  querySnapshot.forEach((doc) => {
    if(doc.id === currentUser.email) user = doc.data()
  })


  console.log(user)
  return user
}
getUser({email:'weemfed@gmail.com'})
// editUser()
// Update database






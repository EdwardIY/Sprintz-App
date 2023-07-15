import React from 'react';
import ReactDOM from 'react-dom/client';
import { auth,checkIfSignedIn } from './firebase.js'
// import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.css';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
// User name state to pass to home for making calls to firebase
console.log(auth.currentUser)

// Check if user is signed in
// checkIfSignedIn(auth,(user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/home',
    element: <Home/>

  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);


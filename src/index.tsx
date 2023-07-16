// import React from 'react';
// import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import { auth,checkIfSignedIn } from './firebase.js'
// import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, RouterProvider,useNavigate } from 'react-router-dom';
import './styles/global.css';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
// User name state to pass to home for making calls to firebase

  console.log(auth.currentUser)

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
        element: <Home />
    
      }
    ])
    
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
        <RouterProvider router={router} />
    );



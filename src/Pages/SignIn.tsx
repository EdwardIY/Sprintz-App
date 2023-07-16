import '../styles/SignIn.css'
import { useNavigate } from 'react-router-dom';

import {auth,signIn_Option1,signIn_Option2,signIn_Option2_mobile,provider} from '../firebase.js'

import {useLayoutEffect } from 'react';


export default function SignIn() {
    const navigate = useNavigate()

    
    useLayoutEffect(() => {
        if (auth.currentUser) return navigate('/home')
    })


    const signInWithEmail = (e: any) => {
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        signIn_Option1(auth, e.target.email.value, e.target.password.value)
            .then((userInfo) => {
                console.log('Signed In')
                navigate('/home')
            })
            .catch((error) => {
                if (error.code.split('/')[1] == 'wrong-password')
                    alert('Wrong Password')
                else if (error.code.split('/')[1] == 'too-many-requests')
                    alert('To many failed attepmts try again later')
                else if (error.code.split('/')[1] == 'user-not-found')
                    alert('Account not found')
                console.log(error.code.split('/'))
                console.log(error.message)
            });
    }
    const signInWithGoogle = () => {
         if (window.innerWidth < 700) {
             signIn_Option2_mobile(auth, provider)
             .then((result)=> console.log(result))
             .catch((err) => console.log(err))
         }
         else {
            provider.setCustomParameters({ prompt: 'select_account' });
            signIn_Option2(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // // console.log(credential)
                // const token = credential?.accessToken;
                // // console.log(token)
                // // // The signed-in user info.
                const user = result.user;
                console.log(user)
            })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
            })
        }

    }




    return <section className="SignIn Container--col">

    <h1 className="Title">Welcome To Sprintz</h1>
        <form onSubmit={signInWithEmail} className='SignIn_Form Container--col'>
        <input name='email' required className='SignIn_Form_Input' type="email" placeholder="Enter your email" />
        <input name='password' required className='SignIn_Form_Input' type="password" placeholder="Enter your password" />
        <button className='Btn a'>Sign In</button>
        <a href="/sign-up" className="Btn b">Sign Up</a>
        <div onClick={signInWithGoogle} className="Btn c">Continue with Google</div>
        </form>
        
</section>
}
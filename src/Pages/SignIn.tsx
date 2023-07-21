import '../styles/SignIn.css'
import { useNavigate } from 'react-router-dom';

import {auth,signIn_Option1,signIn_Option2,signIn_Option2_mobile,provider,createDatabase,getUser} from '../firebase.js'

import {useLayoutEffect } from 'react';


export default function SignIn() {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        goToHomePage()
    })

    async function goToHomePage() {
        if (auth.currentUser) {
            let userHasAccount  = await getUser(auth.currentUser)
            if (userHasAccount) return navigate('/home')
            else { 
                await createDatabase(auth.currentUser)
                goToHomePage()
            } 
        }
    } 



    const signInWithEmail = (e: any) => {
        e.preventDefault()
        signIn_Option1(auth, e.target.email.value, e.target.password.value)
            .then((userInfo) => {
                console.log('Signed In')
                goToHomePage()
            })
            .catch((error) => {
                if (error.code.split('/')[1] == 'wrong-password')
                    alert('Wrong Password')
                else if (error.code.split('/')[1] == 'too-many-requests')
                    alert('To many failed attepmts try again later')
                else if (error.code.split('/')[1] == 'user-not-found')
                    alert('Account not found')
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
                .then( async (result) => {
                    goToHomePage() 
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

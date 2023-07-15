import '../styles/SignIn.css'
import {auth,signIn_Option1} from '../firebase.js'


export default function SignIn() {

    const handleSignIn = (e: any) => {
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        signIn_Option1(auth, e.target.email.value, e.target.password.value)
            .then((userInfo) => {
                console.log(userInfo.user)
                document.cookie = "firebaseID=" + userInfo.user.email ;
            })
            .catch((error) => {
                console.log(error)
            });
}




    return <section className="SignIn Container--col">

    <h1 className="Title">Welcome To Sprintz</h1>
        <form onSubmit={handleSignIn} className='SignIn_Form Container--col'>
        <input name='email' required className='SignIn_Form_Input' type="email" placeholder="Enter your email" />
        <input name='password' required className='SignIn_Form_Input' type="password" placeholder="Enter your password" />
        <button className='Btn a'>Sign In</button>
        <a href="/sign-up" className="Btn b"> Sign Up</a>
    </form>
</section>
}
import { useState,useLayoutEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

import '../styles/SignUp.css';
import * as Icon from 'react-bootstrap-icons';
import { auth,createUser,customizeProfile,createDatabase,getUser } from "../firebase.js";


export default function SignUp() {
    const [createAccount, setCreateAccount] = useState(false);
    const [hasPassword, setHasPassword] = useState(false);
    const navigate = useNavigate()

    const verifyPassword = (value: string) => {
        if (value.length) setHasPassword(true);
        else setHasPassword(false)
    }

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

    const handleCreate = (e:any) => {
        e.preventDefault();


        const Test1 = Test_Username(e.target.username.value)
        const Test2 = Test_Password1(e.target.password1.value)
        const Test3 = Test_Password2(e.target.password2.value,e.target.password1.value)
        
        if (Test1 !== 'passed') return alert(Test1)
        if (Test2 !== 'passed') return alert(Test2)
        if (Test3 !== 'passed') return alert(Test3)

        // alert('All Passed')
        createUser(auth, e.target.email.value, e.target.password1.value)
            .then((newUserInfo) => {
                customizeProfile(newUserInfo.user, { displayName: e.target.username.value  })
                .then(() =>{ 
                    goToHomePage()
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => {
                console.log(err.code)
                if (err.code.split('/')[1] == 'email-already-in-use') alert('Email already in use')

            })
        

    }

    return <section className="SignUp Container--col">
                <h1 className="Title">Join Sprintz</h1>
{/*         
                <div className='Btn a'>Join With Google</div>
                <div>or</div> */}
                <div onClick={ () => setCreateAccount(true)} className="Btn b">Create Account</div>
                
                <span className='Note'>Already have an account?<Link to="/"> Sign In</Link></span>
            {/* <form className='SignIn_Form Container--col'>
                <input className='SignIn_Form_Input' type="text" placeholder="Enter your username" />
                <input className='SignIn_Form_Input' type="password" placeholder="Enter your password" />
            </form> */}
        
        {createAccount &&  <form onSubmit={(e) => handleCreate(e)} className='SignUp_Form Container--col'>
            <Icon.XLg className='SignUp_Form_Close' onClick={ () => setCreateAccount(false) } />
            <h2>Create Account</h2>
            <input name='username' className='SignUp_Form_Input' type="text" placeholder='Create username' required/>
            <input name='email' className='SignUp_Form_Input' type="email" placeholder=' Add email' required/>
            <input onChange={(e) => verifyPassword(e.target.value)}  name='password1'  className='SignUp_Form_Input' type="password" placeholder='Create password' required/>
            <input style={{display: hasPassword ? 'block' : 'none'}} name='password2'  className='SignUp_Form_Input' type="password" placeholder='Retype password' required />
            <button  className="Btn b" >Create Account</button>
        </form>}

    </section>
}

function Test_Username(name:string) {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'


    if( !isNaN(+name[0])) return 'Username cannot start with a number'

    for (let char of name) {
        if(!chars.includes(char.toLowerCase())) return 'Username contains invalid characters'
    }
    return 'passed';
}
function Test_Password1(password: string) {
    if(password.length < 6 ) return 'Password must be at east 6 characters long'
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890#$'
    for (let char of password) {
        if(char === ' ') return 'Password cannot conatin spaces'
        if(!chars.includes(char.toLowerCase())) return 'Password contains invalid characters'
    }
    return 'passed'

}
function Test_Password2(a:string,b:string) {
    if (a.length != b.length) return 'Passwords do not match'
    
    for (let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return 'Passwords do not match';
    }

    return 'passed'
}
import '../styles/SignUp.css'

export default function SignUp() {
    return <section className="SignUp Container--col">
                <h1 className="Title">Join Sprintz</h1>
        
                <div className='Btn a'>Join With Google</div>
                <div>or</div>
                <div className="Btn b">Create Account</div>
                
                <span className='Note'>Already have an account? <span>Sign In</span></span>
            {/* <form className='SignIn_Form Container--col'>
                <input className='SignIn_Form_Input' type="text" placeholder="Enter your username" />
                <input className='SignIn_Form_Input' type="password" placeholder="Enter your password" />
            </form> */}
        <form className='Container--col'>
            <input type="text" placeholder='Create username'/>
            <input type="password" placeholder='Create password'/>
            <input disabled type="password" placeholder='Retype password' />
            <div>Create Account</div>
        </form>
    </section>
}
import '../styles/SignIn.css'

export default function SignIn() {
    return <section className="SignIn Container--col">

    <h1 className="Title">Welcome To Sprintz</h1>
    <form className='SignIn_Form Container--col'>
        <input className='SignIn_Form_Input' type="text" placeholder="Enter your username" />
        <input className='SignIn_Form_Input' type="password" placeholder="Enter your password" />
        <div className='Btn a'>Sign In</div>
        <div className="Btn b">Create Account</div>
    </form>
</section>
}
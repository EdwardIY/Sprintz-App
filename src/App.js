import {Route,Routes} from 'react-router-dom';
import { useState, createContext} from 'react'
import {auth,checkIfSignedIn} from './firebase.js'
import './styles/global.css';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
export const UserContext = createContext()

export default function App() {
    const [user, setUser] = useState(auth)

    checkIfSignedIn(auth, (newState) => {
            if (auth.currentUser) {
                setUser(newState)
            }
    })
    
    

    return   <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home user={user} />} />
                    <Route path="*" element={<SignIn />} />
            </Routes>
}

import { app } from "../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const Button = ({className}) => {



  return (
    
        <button 
            className={`px-5 py-2 bg-sky-600 rounded-lg cursor-pointer text-white font-bold 
          hover:bg-sky-500 ${className}`}>
            Sign in
        </button>
   
  )
}

export default Button
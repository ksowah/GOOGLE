
import { app } from "../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const Button = ({className}) => {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loginState, setLoginState] = useState(false)
  const [user, setUser] = useState(null)
  
  useEffect(()=>{
     return onAuthStateChanged(auth, user => {
      if(user){
        setLoginState(true)
        setUser({
          name: user.displayName,
          image: user.photoURL
        })


      }else{
        setLoginState(false)
        setUser(null)
      }
    })
  
  }, [])

  return (
            <>
                {
                  loginState ? 
                    <img
                       src={ user?.image}
                       className={`rounded-full border-gray-200 sm:p-px h-12 cursor-pointer ${className}`}
                       onClick={()=>signOut(auth)}
                    />
                  :

                  <button 
                  onClick={()=>signInWithPopup(auth, provider) .catch(error => alert(error.code))}
                  className={`px-5 py-2 bg-sky-600 rounded-lg cursor-pointer text-white font-bold 
                  hover:bg-sky-500 ${className}`}>
                  Sign in
                  </button>
                }
            </>
        
   
  )
}

export default Button
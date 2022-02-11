
import { app } from "../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
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
        setUser(null)
        router.push('/login')
      }
    })
  
  }, [])

  return (
            <>
                {
                  loginState ? 
                    <img
                      src="user.image"
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
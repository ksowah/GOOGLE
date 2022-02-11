
import { app } from "../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Button = ({className}) => {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loginState, setLoginState] = useState(false)
  
  useEffect(()=>{
      onAuthStateChanged(auth, user => {
          if(user){
            setLoginState(true)
          }
      })
  
  }, [])

  return (
            <>
                {
                  loginState ? 'hello' :

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
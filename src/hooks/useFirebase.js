import { useEffect, useState } from "react"
import initFirebase from "../firebase/initFirebase"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";

initFirebase()

const useFIrebase = () => {
    
    const [user,setUser] = useState({})
    const [error,setError] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
        
    }
    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
      }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({}); //for useEffect
            setError("");
            console.log("logout seccess!");
        })
        .finally(()=> setIsLoading(false))
    }

    const setUserName = (nameObj) => {
        return updateProfile(auth.currentUser, nameObj)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
          });
    },[])

    return {
        user,
        error,
        logOut,
        signInWithGoogle,
        setUser,
        setIsLoading,
        isLoading,
        createNewUser,
        setError,
        setUserName,
        processLogin
    }
}

export default useFIrebase

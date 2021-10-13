import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then (result => {
            setUser(result.user)
        });
    }
    // observed user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            else {
                setUser({})
            }
          });
          return () => unSubscribed; 
    }
        ,[])


    const logOut = () =>{
        signOut(auth)
        .then(() => { })
    }
    
    return{
         user,
        signInWithGoogle,
        logOut
    }
}


export default useFirebase;
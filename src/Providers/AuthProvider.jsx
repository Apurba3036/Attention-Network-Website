import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
   const [user,SetUser]=useState(null);
   const [loading,setLoading]=useState(true);
   const googleProvider=new GoogleAuthProvider();

//   const createUser = async (email, password, displayName) => {
//   setLoading(true);
//   try {
//     // Create user with email and password
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Set the display name
//     await updateProfile(userCredential.user, { displayName: displayName });
//     console.log("User profile updated with display name:", displayName);

//     // Send verification email
//     await sendEmailVerification(userCredential.user);
//     console.log("Verification email sent.");

//     // Return user credential
//     setLoading(false);
//     return userCredential;
//   } catch (error) {
//     console.error("Error during sign-up:", error);
//     setLoading(false);
//     throw error; // Re-throw the error if needed
//   }
// };

// const createUser = (email, password) => {
//   setLoading(true);
//   return createUserWithEmailAndPassword(auth, email, password)
// }

   const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }

   const googleSignin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
   }

   const logOut=()=>{

      setLoading(true);
      return signOut(auth);
   }

   useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,CurrentUser=>{
        SetUser(CurrentUser);
        console.log('current user',CurrentUser);
        setLoading(false);
        if(CurrentUser && CurrentUser.email){
          const loggedUser={
            email: CurrentUser.email
         }
         console.log(loggedUser);
          fetch(`http://localhost:5000/jwt`,{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body:JSON.stringify(loggedUser)
          })
          .then(res=>res.json())
          .then(data=>{
            // console.log("response",data);
            //localstorage is not the best option here
            localStorage.setItem('Access_token',data.token);
          })
        }
        else{
          localStorage.removeItem('Access_token');
        }
      });
      return ()=>{
        return unsubscribe;
      }
   },[])


    const authinfo={
        user,
        loading,
        // createUser,
        signIn,
        googleSignin,
        logOut

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);



     // Email and Password Registration 

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     }

     // Email and Password Login and Logout

     const userLogin = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
     }


     // Google Login
     const googleLogin = () => {
          return signInWithPopup(auth, googleProvider);
     }


     // User LogOut

     const userLogout = () => {
          return signOut(auth);
     }


     // User Auth Info

     const authInfo = {
          user,
          loading,
          createUser,
          userLogin,
          userLogout,
          googleLogin
     }


     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
          
     );
};

export default AuthProvider;
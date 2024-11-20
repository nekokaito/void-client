/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     GoogleAuthProvider,
     onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/firebase";
import baseUrl from "../hook/baseURL";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     // Email and Password Registration
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     };

     // Email and Password Login
     const userLogin = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
     };

     // Google Login
     const googleLogin = () => {
          return signInWithPopup(auth, googleProvider);
     };

     // User Logout
     const userLogout = () => {
          return signOut(auth);
     };

     // Auth Checking
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
               setLoading(true);

               if (currentUser) {
                    try {
                         // Send user data to backend and retrieve the token
                         const authResponse = await axios.post(`${baseUrl}/authentication`, {
                              email: currentUser.email,
                         });

                         if (authResponse?.data?.token) {
                              localStorage.setItem("access-token", authResponse.data.token);
                         }

                         // Fetch user details from the backend
                         const userResponse = await axios.get(`${baseUrl}/user/${currentUser.email}`);

                         // Merge Firebase and Backend user data
                         setUser({
                              ...currentUser,
                              ...userResponse.data,
                         });
                    } catch (error) {
                         console.error("Error during user authentication:", error);
                    } finally {
                         setLoading(false);
                    }
               } else {
                    localStorage.removeItem("access-token");
                    setUser(null);
                    setLoading(false);
               }
          });

          return () => {
               unsubscribe();
          };
     }, []); 

     // User Auth Info
     const authInfo = {
          user,
          loading,
          createUser,
          userLogin,
          userLogout,
          googleLogin,
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;

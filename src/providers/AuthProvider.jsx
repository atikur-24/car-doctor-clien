import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create a new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile 
    const updateUserProfile = (name, currentUser) => {
        setLoading(true)
        return updateProfile(currentUser, {
            displayName: name
        })
    }

    // google sign in
    const googleSignIn =  () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // facebook sign in

    // twitter sign in

    // user login with email and password
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer user auth state
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if(currentUser && currentUser.email) {
                const userEmail = { email: currentUser.email }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userEmail)
                })
                  .then(res => res.json())
                  .then(data => {
                    localStorage.setItem('car-access-token', data?.token);
                  })
            }
            else {
                localStorage.removeItem('car-access-token')
            }
        })

        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        googleSignIn,
        logout,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useState, createContext, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, provider } from '../config/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(window.localStorage.user ? JSON.parse(window.localStorage.user) : null)

    // useEffect(() => {
    //     const reVerifyLogin = async () => {
    //         if (window.localStorage.accessToken && window.localStorage.user) {
    //             const response = await axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + window.localStorage.accessToken)
    //             if (response.status !== 200) {
    //                 setUser(null)
    //             }
    //         } else {
    //             setUser(null)
    //         }
    //     }
    //     reVerifyLogin()
    // }, [])


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        });

        return () => {
            unsub()
        }
    }, [])

    const googleSignIn = () => {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            window.localStorage.accessToken = token

            const user = result.user
            window.localStorage.user = JSON.stringify(user)

            setUser(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const signIn = async (email, password) => {
        if (!email || !password) throw new Error("email or password not present")
        return signInWithEmailAndPassword(auth, email, password).then(result => {
            window.localStorage.user = JSON.stringify(result.user)
            setUser(result.user)
        }).catch(err => {
            setUser(null)
        })
    }
    async function logOut() {
        localStorage.clear()
        sessionStorage.clear()

        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        
        return signOut(auth);
    }

    const signUp = async (email, password) => {
        if (!email || !password) throw new Error("email or password not present")
        return createUserWithEmailAndPassword(auth, email, password).then(result => {
            window.localStorage.user = JSON.stringify(result.user)
            setUser(result.user)
        }).catch(err => {
            setUser(null)
        })
    }

    const values = {
        user,
        setUser,
        googleSignIn,
        signIn,
        signUp,
        logOut
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}